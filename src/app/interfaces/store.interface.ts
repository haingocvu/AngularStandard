import { WinWheelModel } from '@app/interfaces/win-wheel.interface';
import { GenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { SpinModel } from '@app/interfaces/spin.interface';

export interface StoreInterface {
  winWheelData: GenericReducerState<WinWheelModel>;
  spinData: GenericReducerState<SpinModel>;
}
