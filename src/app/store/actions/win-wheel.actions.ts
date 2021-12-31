import { createAction } from '@ngrx/store';

import {
  GET_WIN_WHEEL_DATA,
  GET_WIN_WHEEL_DATA_SUCCESS,
  GET_WIN_WHEEL_DATA_FAILED,
  GET_WIN_WHEEL_DATA_RESET,
} from '@app/consts/winWheelActionConstants';
import { WinWheelModel } from '@app/interfaces/win-wheel.interface';

export const getWinWheelData = createAction(
  GET_WIN_WHEEL_DATA,
  (payload: string) => ({ payload })
);

export const getWinWheelDataSuccess = createAction(
  GET_WIN_WHEEL_DATA_SUCCESS,
  (payload: WinWheelModel | null) => ({ payload })
);

export const getWinWheelDataFailed = createAction(
  GET_WIN_WHEEL_DATA_FAILED,
  (payload: string) => ({ payload })
);

export const getWinWheelDataReset = createAction(GET_WIN_WHEEL_DATA_RESET);
