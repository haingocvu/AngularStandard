import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { SpinService } from '@app/services/spin/spin.service';
import { IHttpResult } from '@app/interfaces/http.interface';
import { parseResponse } from '@app/utils/http.util';
import {
  spinTheWheel,
  spinTheWheelSuccess,
  spinTheWheelFailed,
} from '@app/store/actions/spin.actions';
import { ISpinResult } from '@app/interfaces/spin.interface';

@Injectable()
export class SpinEffect {
  constructor(private action: Actions, private spinService: SpinService) {}

  spinTheWheelEffect = createEffect((): any =>
    this.action.pipe(
      ofType(spinTheWheel),
      switchMap((action: any) => {
        return this.spinService
          .spin(action.payload.campaignId, action.payload.headerConfig)
          .pipe(
            map((spinDataRes: IHttpResult<ISpinResult>) =>
              spinTheWheelSuccess(parseResponse(spinDataRes))
            ),
            catchError((err) => {
              return of(spinTheWheelFailed('load failed'));
            })
          );
      })
    )
  );
}
