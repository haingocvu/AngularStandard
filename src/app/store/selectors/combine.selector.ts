import { createSelector } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { ICombineState } from '@app/interfaces/combine.interface';

const selectCombineData = (state: IStoreState) => state.combineData;

export const remainingTurnsSelector = createSelector(
  selectCombineData,
  (state: ICombineState) => state.remainingTurns
);

export const remainingRewardSelector = createSelector(
  selectCombineData,
  (state: ICombineState) => state.remainingRewards
);
