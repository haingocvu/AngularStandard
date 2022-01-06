import { createSelector } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { ICustomerReducerState } from '@app/interfaces/customerInfo.interface';

export const selectCustomerInfoData = (state: IStoreState) =>
  state.customerInfoData;

export const customerInfoDataSelector = createSelector(
  selectCustomerInfoData,
  (state: ICustomerReducerState) => state
);

export const hasEnterCodeSuccessSelector = createSelector(
  selectCustomerInfoData,
  (state: ICustomerReducerState) =>
    !!(!state.isLoading && state.isLoaded && state.data)
);
