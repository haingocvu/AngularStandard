import { createSelector } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { IWinWheel } from '@app/interfaces/win-wheel.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';

const selectWinWheelData = (state: IStoreState) => state.winWheelData;

export const winWheelDataSelector = createSelector(
  selectWinWheelData,
  (state: IGenericReducerState<IWinWheel>) => state
);
