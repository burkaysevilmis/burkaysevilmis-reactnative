export interface GeneralResultModel<T> {
  message: string;
  data: T;
}
export enum GeneralMessage {
  success = 'Success',
}