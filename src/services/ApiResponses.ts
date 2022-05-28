export type ApiResponse<T> =
  | ApiMessageResponse
  | ApiDataResponse<T>
  | ApiErrorResponse;

export interface ApiErrorResponse {
  result: 'error';
  message?: string;
  data?: any;
  error?: Error;
}

export type ApiMessageResponse = {
  result: 'success';
  message: string;
};

export type ApiDataResponse<T> = {
  result: 'success';
  data: T;
};

export type ApiDataResponsePaginated<T> = ApiDataResponse<T[]> & {
  size: number;
  totalCount: number;
  offset: number;
  nextUrl?: string;
  additionalData?: any;
};
