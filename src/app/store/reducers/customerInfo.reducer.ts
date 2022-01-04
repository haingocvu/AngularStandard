import { createReducer, on } from '@ngrx/store';

import {
  getCustomerInfoSuccess,
  getCustomerInfoFailed,
  getCustomerInfoReset,
  saveLoginInfo,
} from 'app/store/actions/customerInfo.actions';

import { ICustomerReducerState } from '@app/interfaces/customerInfo.interface';

export const initialState: ICustomerReducerState = {
  data: null,
  isLoading: false,
  errMsg: '',
  loginInfo: null,
};

const _customerInfoReducer = createReducer(
  initialState,
  on(getCustomerInfoSuccess, (state, action) => ({
    ...state,
    isLoading: initialState.isLoading,
    errMsg: initialState.errMsg,
    data: action.payload,
  })),
  on(getCustomerInfoFailed, (state, action) => ({
    ...state,
    isLoading: initialState.isLoading,
    errMsg: action.payload,
    data: initialState.data,
  })),
  on(getCustomerInfoReset, () => ({
    ...initialState,
  })),
  on(saveLoginInfo, (state, action) => ({
    ...state,
    loginInfo: action.payload,
  }))
);

export function customerInfoReducer(state: any, action: any) {
  return _customerInfoReducer(state, action);
}
