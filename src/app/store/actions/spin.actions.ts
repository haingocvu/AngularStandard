import { createAction } from '@ngrx/store';

import {
  SPIN_THE_WHEEL,
  SPIN_THE_WHEEL_SUCCESS,
  SPIN_THE_WHEEL_FAILED,
  SPIN_THE_WHEEL_RESET,
} from '@app/consts/spinActionConstants';

export const spinTheWheel = createAction(
  SPIN_THE_WHEEL,
  (payload: { campaignId: string | undefined; headerConfig: any }) => ({
    payload,
  })
);

export const spinTheWheelSuccess = createAction(
  SPIN_THE_WHEEL_SUCCESS,
  (payload: any | null) => ({ payload })
);

export const spinTheWheelFailed = createAction(
  SPIN_THE_WHEEL_FAILED,
  (payload: string) => ({ payload })
);

export const spinTheWheelReset = createAction(SPIN_THE_WHEEL_RESET);
