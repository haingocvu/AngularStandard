import { createReducer, on } from '@ngrx/store';

import {
  getWinWheelData,
  getWinWheelDataSuccess,
  getWinWheelDataFailed,
  getWinWheelDataReset,
} from 'app/store/actions/win-wheel.actions';
import { WinWheelData } from '@app/interfaces/win-wheel.interface';
import { GeneralReducerState } from '@app/interfaces/general-reducer-state.interface';

export const initialState: GeneralReducerState<WinWheelData> = {
  data: null,
  isLoading: false,
  errMsg: '',
};

const _winWheelReducer = createReducer(
  initialState,
  on(getWinWheelDataSuccess, (state, action) => ({
    ...state,
    isLoading: initialState.isLoading,
    errMsg: initialState.errMsg,
    data: action.payload,
  })),
  on(getWinWheelDataFailed, (state, action) => ({
    ...state,
    isLoading: initialState.isLoading,
    errMsg: action.payload,
    data: initialState.data,
  })),
  on(getWinWheelDataReset, () => ({
    ...initialState,
  }))
);

export function winWheelReducer(state: any, action: any) {
  return _winWheelReducer(state, action);
}
