import { createSelector } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { ICustomerReducerState } from '@app/interfaces/customerInfo.interface';

const selectCustomerInfoData = (state: IStoreState) => state.customerInfoData;

export const customerInfoDataSelector = createSelector(
  selectCustomerInfoData,
  (state: ICustomerReducerState) => state
);
