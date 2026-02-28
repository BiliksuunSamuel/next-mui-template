export interface IBaseReducerState {
  message?: any;
  error?: any;
  loading?: boolean;
  title?: string | null;
}

export interface IResponseReducerState extends IBaseReducerState {}
