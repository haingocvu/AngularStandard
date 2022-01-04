import { createReducer, on } from '@ngrx/store';

import {
  spinTheWheelFailed,
  spinTheWheelSuccess,
  spinTheWheelReset,
} from 'app/store/actions/spin.actions';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { ISpinResult } from '@app/interfaces/spin.interface';

export const initialState: IGenericReducerState<ISpinResult> = {
  data: null,
  isLoading: false,
  errMsg: '',
  isLoaded: false,
};

const _spinReducer = createReducer(
  initialState,
  on(spinTheWheelSuccess, (state, action) => ({
    ...state,
    isLoading: initialState.isLoading,
    errMsg: initialState.errMsg,
    data: action.payload,
    isLoaded: true,
  })),
  on(spinTheWheelFailed, (state, action) => ({
    ...state,
    isLoading: initialState.isLoading,
    errMsg: action.payload,
    data: initialState.data,
    isLoaded: true,
  })),
  on(spinTheWheelReset, () => ({
    ...initialState,
  }))
);

export function spinReducer(state: any, action: any) {
  return _spinReducer(state, action);
}
