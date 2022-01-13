import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { CustomerRewardService } from '@app/services/customer-reward/customer-reward.service';
import { IHttpResult } from '@app/interfaces/http.interface';
import { parseResponse } from '@app/utils/http.util';
import {
  getCustomerRewardList,
  getCustomerRewardListSuccess,
  getCustomerRewardListFailed,
} from '@app/store/actions/customer-reward.actions';
import { ICustomerReward } from '@app/interfaces/customer-reward.interface';

@Injectable()
export class CustomerRewardEffect {
  constructor(
    private action: Actions,
    private customerRewardService: CustomerRewardService
  ) {}

  customerInfoEffect = createEffect((): any =>
    this.action.pipe(
      ofType(getCustomerRewardList),
      switchMap((action: any) => {
        return this.customerRewardService
          .getCustomerRewardList(
            action.payload.pageSize,
            action.payload.pageNum,
            action.payload.query,
            action.payload.sort
          )
          .pipe(
            map(
              (customerRewardDataRes: IHttpResult<Array<ICustomerReward>>) => {
                debugger;
                return getCustomerRewardListSuccess(
                  parseResponse(customerRewardDataRes)
                );
              }
            ),
            catchError((err) => {
              return of(getCustomerRewardListFailed('load failed'));
            })
          );
      })
    )
  );
}
