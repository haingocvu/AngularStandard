import { createSelector } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { ISpinResult } from '@app/interfaces/spin.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
// import { selectCustomerInfoData } from '@app/store/selectors/customerInfo.selector';

const selectSpinData = (state: IStoreState) => state.spinData;

const selectCusData = (state: IStoreState) => state.customerInfoData;

export const spinDataSelector = createSelector(
  selectSpinData,
  (state: IGenericReducerState<ISpinResult>) => state
);

export const giftBoxSelector = createSelector(
  selectCusData,
  selectSpinData,
  (cusData, spinData) => {
    const { isLoaded, data: _spinData } = spinData;
    const { data: _cusData } = cusData;
    return isLoaded && _spinData ? _spinData.rewards : _cusData?.rewards;
  }
);
