export interface ICustomerInfo {
  customerFullName: string;
  totalTurns: number;
  rewardTurns: number;
  remainingTurns: number;
  effectiveToDate: string;
  rewards: Array<string>;
}
