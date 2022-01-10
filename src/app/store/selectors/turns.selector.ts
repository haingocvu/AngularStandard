import { createSelector } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';

const selectTurnsData = (state: IStoreState) => state.remainingTurns;

export const turnsDataSelector = createSelector(
  selectTurnsData,
  (state: number) => state
);
