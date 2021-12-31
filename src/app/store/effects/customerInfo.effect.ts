import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { CustomerInfoService } from '@app/services/customerInfo/customer-info.service';
import { IHttpResult } from '@app/interfaces/http.interface';
import { parseResponse } from '@app/utils/http.util';
import {
  getCustomerInfo,
  getCustomerInfoSuccess,
  getCustomerInfoFailed,
} from '@app/store/actions/customerInfo.actions';
import { ICustomerInfo } from '@app/interfaces/customerInfo.interface';

@Injectable()
export class CustomerInfoEffect {
  constructor(
    private action: Actions,
    private customerInfoService: CustomerInfoService
  ) {}

  customerInfoEffect = createEffect((): any =>
    this.action.pipe(
      ofType(getCustomerInfo),
      switchMap((action: any) => {
        return this.customerInfoService
          .getCustomerInfo(
            action.payload.campaignId,
            action.payload.headerConfig
          )
          .pipe(
            map((customerInfoDataRes: IHttpResult<ICustomerInfo>) =>
              getCustomerInfoSuccess(parseResponse(customerInfoDataRes))
            ),
            catchError((err) => {
              return of(getCustomerInfoFailed('load failed'));
            })
          );
      })
    )
  );
}
