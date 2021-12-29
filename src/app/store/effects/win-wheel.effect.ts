import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { WinWheelService } from '@app/services/winWheel/win-wheel.service';
import { getWinWheelData } from '@app/store/actions/win-wheel.actions';
import { WinWheelData } from '@app/interfaces/win-wheel.interface';
import { Result } from '@app/interfaces/http.interface';
import { parseResponse } from '@app/utils/http.util';
import {
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
            map((winWheelDataRes: Result<WinWheelData>) =>
              getWinWheelDataSuccess(parseResponse(winWheelDataRes))
            ),
            catchError(() => of(getWinWheelDataFailed('load failed')))
          );
      })
    )
  );
}
