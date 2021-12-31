import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { WinWheelService } from '@app/services/winWheel/win-wheel.service';
import { IWinWheel } from '@app/interfaces/win-wheel.interface';
import { IHttpResult } from '@app/interfaces/http.interface';
import { parseResponse } from '@app/utils/http.util';
import {
  getWinWheelData,
  getWinWheelDataSuccess,
  getWinWheelDataFailed,
} from '@app/store/actions/win-wheel.actions';

@Injectable()
export class WinWheelEffect {
  constructor(
    private action: Actions,
    private winWheelService: WinWheelService
  ) {}
  loadWinWheelEffect = createEffect((): any =>
    this.action.pipe(
      ofType(getWinWheelData),
      switchMap((action: any) => {
        return this.winWheelService
          .getActiveCampaignByType(action.payload)
          .pipe(
            map((winWheelDataRes: IHttpResult<IWinWheel>) =>
              getWinWheelDataSuccess(parseResponse(winWheelDataRes))
            ),
            catchError(() => of(getWinWheelDataFailed('load failed')))
          );
      })
    )
  );
}
