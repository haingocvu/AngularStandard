import { createReducer, on } from '@ngrx/store';

import {
  spinTheWheelFailed,
  spinTheWheelSuccess,
  spinTheWheelReset,
} from 'app/store/actions/spin.actions';
import { GenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { SpinModel } from '@app/interfaces/spin.interface';

export const initialState: GenericReducerState<SpinModel> = {
  data: null,
  isLoading: false,
  errMsg: '',
};

const _spinReducer = createReducer(
  initialState,
  on(spinTheWheelSuccess, (state, action) => ({
    ...state,
    isLoading: initialState.isLoading,
    errMsg: initialState.errMsg,
    data: action.payload,
  })),
  on(spinTheWheelFailed, (state, action) => ({
    ...state,
    isLoading: initialState.isLoading,
    errMsg: action.payload,
    data: initialState.data,
  })),
  on(spinTheWheelReset, () => ({
    ...initialState,
  }))
);

export function spinReducer(state: any, action: any) {
  return _spinReducer(state, action);
}
