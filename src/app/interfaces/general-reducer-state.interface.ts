export interface GeneralReducerState<T> {
  data: T | null;
  isLoading: boolean;
  errMsg: string;
}
