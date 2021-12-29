export interface GenericReducerState<T> {
  data: T | null;
  isLoading: boolean;
  errMsg: string;
}
