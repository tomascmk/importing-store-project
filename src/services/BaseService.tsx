import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ConfigurationService } from './ConfigurationService';
import { ApiDataResponse, ApiErrorResponse, ApiResponse } from './ApiResponses';
import { AppType } from '../enums/AppType';

export enum HttpMethod {
  Delete,
  Get,
  Patch,
  Post,
  Put,
}

export class ErrorApiException extends Error {
  error: ApiErrorResponse;
  response: AxiosResponse;
  constructor(
    error: ApiErrorResponse,
    response: AxiosResponse,
    message?: string
  ) {
    super(message);
    this.error = error;
    this.response = response;
  }
}

export class RequestConfig {
  headers?: { [headerId: string]: string };
  responseType?: ResponseType;
  params?: object;
}

export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream';

const getResponse = async <ResT, ReqT>(
  httpMethod: HttpMethod,
  relativeUrl: string,
  data?: ReqT,
  appType?: AppType,
  config: RequestConfig = {},
  paginated?: boolean
): Promise<ResT> => {
  let fullUrl: string;
  const axiosRequestConfig: AxiosRequestConfig | undefined = config;
  switch (appType) {
    case AppType.Amazon:
      /* fullUrl = `${ConfigurationService.AppSettings.RapidapiAmazonUrl}/api${relativeUrl}`; */
      fullUrl = `https://amazon24.p.rapidapi.com/${relativeUrl}`;
      if (!axiosRequestConfig.headers) {
        axiosRequestConfig.headers = {};
      }
      axiosRequestConfig.headers['X-RapidAPI-Host'] =
        ConfigurationService.AppSettings.RapidapiAmazonHost ??
        'amazon24.p.rapidapi.com';
      axiosRequestConfig.headers['X-RapidAPI-Key'] =
        ConfigurationService.AppSettings.RapidapiAmazonKey ??
        'b7272af9famsh466d37df6493dedp13eaabjsnfeddc25dada0';
      break;
    default:
      fullUrl = `https://amazon24.p.rapidapi.com/${relativeUrl}`;
    /* default:
      fullUrl = `${ConfigurationService.AppSettings.RapidapiAmazonUrl}/api${relativeUrl}`; */
  }

  switch (httpMethod) {
    case HttpMethod.Get: {
      try {
        const response: any = await axios.get<ApiResponse<ResT>>(
          fullUrl,
          axiosRequestConfig
        );
        return response?.data;
      } catch (error) {
        handleError(error as AxiosError<ApiErrorResponse>, 'GET');
      }
      break;
    }

    case HttpMethod.Post: {
      try {
        const response = await axios.post<
          ReqT,
          AxiosResponse<ApiDataResponse<ResT>>
        >(fullUrl, data, axiosRequestConfig);
        return response?.data?.data;
      } catch (error) {
        handleError(
          error as AxiosError<ApiErrorResponse>,
          'POST',
          fullUrl,
          data
        );
      }
      break;
    }

    case HttpMethod.Put: {
      try {
        const response = await axios.put<
          ReqT,
          AxiosResponse<ApiDataResponse<ResT>>
        >(fullUrl, data, axiosRequestConfig);
        return response?.data?.data;
      } catch (error) {
        handleError(
          error as AxiosError<ApiErrorResponse>,
          'PUT',
          fullUrl,
          data
        );
      }
      break;
    }

    case HttpMethod.Patch: {
      try {
        const response = await axios.patch<
          ReqT,
          AxiosResponse<ApiDataResponse<ResT>>
        >(fullUrl, data, axiosRequestConfig);
        return response?.data?.data;
      } catch (error) {
        handleError(
          error as AxiosError<ApiErrorResponse>,
          'PATCH',
          fullUrl,
          data
        );
      }
      break;
    }

    case HttpMethod.Delete: {
      try {
        const response = await axios.delete<
          ReqT,
          AxiosResponse<ApiDataResponse<ResT>>
        >(fullUrl, axiosRequestConfig);
        return response?.data?.data;
      } catch (error) {
        handleError(
          error as AxiosError<ApiErrorResponse>,
          'DELETE',
          fullUrl,
          data
        );
      }
      break;
    }

    default: {
      return Promise.reject('Invalid HTTP Method ' + httpMethod);
    }
  }

  return Promise.reject('Invalid HTTP Method ' + httpMethod);
};

const handleError = (
  error: AxiosError<ApiErrorResponse>,
  method: string,
  fullUrl = '',
  data = {}
): void => {
  if (error.response) {
    console.error(
      `Error in request. Error Code: ${
        error.response.status
      } URL requested: ${fullUrl} Payload: ${JSON.stringify(data)}`
    );
    throw new ErrorApiException(
      error.response.data,
      error.response,
      `Error in ${method} request. Error Code: ${error.response.status}. Message: ${error.response.data?.message}`
    );
  } else {
    console.error(
      `Error in request. Error: ${
        error.message
      } URL requested: ${fullUrl} Payload: ${JSON.stringify(data)}`
    );
    throw error;
  }
};

// TODO: Enable call aborting
export const apiPost = async <ReqT, ResT>(
  url: string,
  data?: ReqT,
  appType: AppType = AppType.Amazon,
  requestConfig?: RequestConfig
): Promise<ResT> =>
  await getResponse(HttpMethod.Post, url, data, appType, requestConfig);

export const apiPut = async <ReqT, ResT>(
  url: string,
  data?: ReqT,
  appType: AppType = AppType.Amazon,
  requestConfig?: RequestConfig
): Promise<ResT> =>
  await getResponse(HttpMethod.Put, url, data, appType, requestConfig);

export const apiPatch = async <ReqT, ResT>(
  url: string,
  data?: ReqT,
  appType: AppType = AppType.Amazon,
  requestConfig?: RequestConfig
): Promise<ResT> =>
  await getResponse(HttpMethod.Patch, url, data, appType, requestConfig);

export const apiGet = async <ResT,>(
  url: string,
  appType: AppType = AppType.Amazon,
  requestConfig?: RequestConfig,
  paginated?: boolean
): Promise<ResT> => {
  return await getResponse(
    HttpMethod.Get,
    url,
    undefined,
    appType,
    requestConfig,
    paginated
  );
};

export const apiDelete = async <ResT,>(
  url: string,
  appType: AppType = AppType.Amazon,
  requestConfig?: RequestConfig
): Promise<ResT> =>
  await getResponse(HttpMethod.Delete, url, undefined, appType, requestConfig);

export enum Status {
  Loading = 0,
  Loaded,
  Error,
  Unauthorized,
}
