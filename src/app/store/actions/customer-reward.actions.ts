import { createAction } from '@ngrx/store';

import {
  GET_CUSTOMER_REWARD_LIST,
  GET_CUSTOMER_REWARD_LIST_SUCCESS,
  GET_CUSTOMER_REWARD_LIST_FAILED,
  GET_CUSTOMER_REWARD_LIST_RESET,
  GET_CUSTOMER_REWARD_LIST_START,
} from '@app/consts/customerRewardActionConstants';

export const getCustomerRewardList = createAction(
  GET_CUSTOMER_REWARD_LIST,
  (payload: {
    pageSize: number;
    pageNum: number;
    query: string | undefined;
    sortActive: string | undefined;
    sortDirection: string | undefined;
  }) => ({
    payload,
  })
);

export const getCustomerRewardListStart = createAction(
  GET_CUSTOMER_REWARD_LIST_START
);

export const getCustomerRewardListSuccess = createAction(
  GET_CUSTOMER_REWARD_LIST_SUCCESS,
  (payload: any | null) => ({ payload })
);

export const getCustomerRewardListFailed = createAction(
  GET_CUSTOMER_REWARD_LIST_FAILED,
  (payload: string) => ({ payload })
);

export const getCustomerRewardListReset = createAction(
  GET_CUSTOMER_REWARD_LIST_RESET
);
