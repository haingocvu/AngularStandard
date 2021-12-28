import { createReducer, on } from '@ngrx/store';

import { getWinWheelData } from 'app/store/actions/win-wheel.actions';

export const initialState = {};

const _winWheelReducer = createReducer(
  initialState,
  on(getWinWheelData, (state) => state)
);

export function winWheelReducer(state: any, action: any) {
  return _winWheelReducer(state, action);
}
