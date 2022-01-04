import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
export interface ICustomerInfo {
  customerFullName: string;
  totalTurns: number;
  rewardTurns: number;
  remainingTurns: number;
  effectiveToDate: string;
  rewards: Array<string>;
}

export interface ICustomerLoginInfo {
  phoneNumber: string | undefined;
  contractNumber: string | undefined;
}

export interface ICustomerReducerState
  extends IGenericReducerState<ICustomerInfo> {
  loginInfo: ICustomerLoginInfo | null;
}
