import { IRemainingRewards } from '@app/interfaces/win-wheel.interface';

export interface ICombineState {
  remainingTurns?: number;
  remainingRewards?: IRemainingRewards;
}
