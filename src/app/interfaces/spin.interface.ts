import { IRemainingRewards } from '@app/interfaces/win-wheel.interface';

export interface ISpinResult {
  obtainSpinSegmentId: string;
  remainingTurns: number;
  rewards: Array<string>;
  remainingRewards: IRemainingRewards;
}
