import { createReducer, on } from '@ngrx/store';

import {
  getCustomerRewardListSuccess,
  getCustomerRewardListFailed,
  getCustomerRewardListReset,
  getCustomerRewardListStart,
} from 'app/store/actions/customer-reward.actions';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { ICustomerReward } from '@app/interfaces/customer-reward.interface';

export const initialState: IGenericReducerState<ICustomerReward> = {
  data: null,
  isLoading: false,
  errMsg: '',
  isLoaded: false,
};

const _customerRewardReducer = createReducer(
  initialState,
  on(getCustomerRewardListStart, () => ({
    ...initialState,
    isLoading: true,
  })),
  on(getCustomerRewardListSuccess, (state, action) => {
    debugger;
    return {
      ...state,
      isLoading: initialState.isLoading,
      errMsg: initialState.errMsg,
      data: action.payload,
      isLoaded: true,
    };
  }),
  on(getCustomerRewardListFailed, (state, action) => ({
    ...state,
    isLoading: initialState.isLoading,
    errMsg: action.payload,
    data: initialState.data,
    isLoaded: true,
  })),
  on(getCustomerRewardListReset, () => ({
    ...initialState,
  }))
);

export function customerRewardReducer(state: any, action: any) {
  return _customerRewardReducer(state, action);
}
