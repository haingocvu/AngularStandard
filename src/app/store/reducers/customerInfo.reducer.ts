import { createReducer, on } from '@ngrx/store';

import {
  getCustomerInfoSuccess,
  getCustomerInfoFailed,
  getCustomerInfoReset,
} from 'app/store/actions/customerInfo.actions';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { ICustomerInfo } from '@app/interfaces/customerInfo.interface';

export const initialState: IGenericReducerState<ICustomerInfo> = {
  data: null,
  isLoading: false,
  errMsg: '',
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
  }))
);

export function customerInfoReducer(state: any, action: any) {
  return _customerInfoReducer(state, action);
}
