import { createAction } from '@ngrx/store';

import {
  GET_CUSTOMER_INFO,
  GET_CUSTOMER_INFO_SUCCESS,
  GET_CUSTOMER_INFO_FAILED,
  GET_CUSTOMER_INFO_RESET,
  SAVE_LOGIN_INFO,
  GET_CUSTOMER_INFO_START,
} from '@app/consts/customerActionConstants';

export const getCustomerInfo = createAction(
  GET_CUSTOMER_INFO,
  (payload: { campaignId: string | undefined; headerConfig: any }) => ({
    payload,
  })
);

export const getCustomerInfoStart = createAction(GET_CUSTOMER_INFO_START);

export const getCustomerInfoSuccess = createAction(
  GET_CUSTOMER_INFO_SUCCESS,
  (payload: any | null) => ({ payload })
);

export const getCustomerInfoFailed = createAction(
  GET_CUSTOMER_INFO_FAILED,
  (payload: string) => ({ payload })
);

export const getCustomerInfoReset = createAction(GET_CUSTOMER_INFO_RESET);

export const saveLoginInfo = createAction(
  SAVE_LOGIN_INFO,
  (payload: {
    phoneNumber: string | undefined;
    contractNumber: string | undefined;
  }) => ({
    payload,
  })
);
