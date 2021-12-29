import { createSelector } from '@ngrx/store';
import { StoreInterface } from '@app/interfaces/store.interface';
import { WinWheelData } from '@app/interfaces/win-wheel.interface';
import { GenericReducerState } from '@app/interfaces/general-reducer-state.interface';

const selectWinWheelData = (state: StoreInterface) => state.winWheelData;

export const winWheelDataSelector = createSelector(
  selectWinWheelData,
  (state: GenericReducerState<WinWheelData>) => state
);
