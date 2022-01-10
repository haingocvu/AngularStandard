import { createReducer, on } from '@ngrx/store';

import { setTurnCount } from 'app/store/actions/turns.actions';

export const initialState = 0;

const _turnsReducer = createReducer(
  initialState,
  on(setTurnCount, (state, action) => action.payload)
);

export function turnsReducer(state: any, action: any) {
  return _turnsReducer(state, action);
}
