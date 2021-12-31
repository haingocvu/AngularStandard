export interface IGenericReducerState<T> {
  data: T | null;
  isLoading: boolean;
  errMsg: string;
}
