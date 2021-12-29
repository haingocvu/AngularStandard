import { WinWheelData } from '@app/interfaces/win-wheel.interface';
import { GenericReducerState } from '@app/interfaces/general-reducer-state.interface';

export interface StoreInterface {
  winWheelData: GenericReducerState<WinWheelData>;
}
