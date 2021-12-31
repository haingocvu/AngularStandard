import { createSelector } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { ICustomerInfo } from '@app/interfaces/customerInfo.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';

const selectCustomerInfoData = (state: IStoreState) => state.customerInfoData;

export const customerInfoDataSelector = createSelector(
  selectCustomerInfoData,
  (state: IGenericReducerState<ICustomerInfo>) => state
);
