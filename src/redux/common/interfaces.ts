/* WORKERS */
export interface ICommonWorker<T> {
  type: string;
  payload: T;
}

/* SEARCH CRITERIA */
export interface ICriteria {
  criteria: string;
}

/* DATA OBJECTS */
export interface ICommonDataState {
  isLoading: boolean;
  isError: boolean;
  error: string;
}

/* DATA LISTS */
export interface ICommonListOptions extends ICriteria {
  count: number;
  limit: number;
  skip: number;
  page: number;
  sort: string;
  direction: string;
}

export interface ICommonListState extends ICommonDataState {
  options: ICommonListOptions;
}

/* NOTIFICATIONS */
export interface INotification {
  id: string;
  type: string;
  msg: string;
}

/* MODALS */
// export interface IFormResultModal {
//   name: string;
//   text: string;
//   position: string;
// }

// export interface IModal<T> {
//   status: boolean;
//   data: T;
// }
