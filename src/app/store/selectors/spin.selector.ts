import { createSelector } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { ISpinResult } from '@app/interfaces/spin.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';

const selectSpinData = (state: IStoreState) => state.spinData;

export const spinDataSelector = createSelector(
  selectSpinData,
  (state: IGenericReducerState<ISpinResult>) => state
);
