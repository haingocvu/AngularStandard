import { createSelector } from '@ngrx/store';
import { StoreInterface } from '@app/interfaces/store.interface';
import { SpinModel } from '@app/interfaces/spin.interface';
import { GenericReducerState } from '@app/interfaces/general-reducer-state.interface';

const selectSpinData = (state: StoreInterface) => state.spinData;

export const spinDataSelector = createSelector(
  selectSpinData,
  (state: GenericReducerState<SpinModel>) => state
);
