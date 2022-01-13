import { createSelector } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { ICustomerReward } from '@app/interfaces/customer-reward.interface';

export const selectCustomerRewardData = (state: IStoreState) =>
  state.customerRewardData;

export const customerInfoDataSelector = createSelector(
  selectCustomerRewardData,
  (state: IGenericReducerState<Array<ICustomerReward>>) => state
);
