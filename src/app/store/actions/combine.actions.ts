import { createAction } from '@ngrx/store';
import { IRemainingRewards } from '@app/interfaces/win-wheel.interface';

import {
  COMBINE_SET_TURN_COUNT,
  COMBINE_SET_REMAINING_REWARDS,
} from '@app/consts/combineActionConstants';

export const setTurnCount = createAction(
  COMBINE_SET_TURN_COUNT,
  (payload: number) => ({ payload })
);

export const setRemainingRewards = createAction(
  COMBINE_SET_REMAINING_REWARDS,
  (payload: IRemainingRewards) => ({ payload })
);
