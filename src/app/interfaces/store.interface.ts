import { IWinWheel } from '@app/interfaces/win-wheel.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { ISpinResult } from '@app/interfaces/spin.interface';
import { ICustomerReducerState } from '@app/interfaces/customerInfo.interface';
import { ICombineState } from '@app/interfaces/combine.interface';

export interface IStoreState {
  winWheelData: IGenericReducerState<IWinWheel>;
  spinData: IGenericReducerState<ISpinResult>;
  customerInfoData: ICustomerReducerState;
  combineData: ICombineState;
}
