import { createAction } from '@ngrx/store';

import { TURNS_SET_TURN_COUNT } from '@app/consts/turnsActionConstants';

export const setTurnCount = createAction(
  TURNS_SET_TURN_COUNT,
  (payload: number) => ({ payload })
);
