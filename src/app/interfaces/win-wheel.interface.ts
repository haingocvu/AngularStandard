export interface WinWheelModel {
  id: string;
  name: string;
  version: number;
  rules: string;
  spinSegments: Array<Segment>;
  remainingRewards: RemainingRewards;
}

export interface Segment {
  id: string;
  segmentContent: string;
  obtainContent: string;
  color: string;
}

export interface SpinResult {
  obtainSpinSegmentId: string;
  remainingTurns: number;
  rewards: Array<string>;
}

export interface RemainingRewards {
  totalQuantity: number;
  details: Array<RewardInfo>;
}

export interface RewardInfo {
  reward: string;
  quantity: number;
}
