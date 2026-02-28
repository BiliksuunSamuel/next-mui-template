import { HttpContentTypes, HttpMethods } from "../types";

export interface IBaseSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

export interface IApiResponse<T> {
  code: string;
  message: string;
  data?: T;
}

export interface IPagedResults<T> {
  totalPages: number;
  totalCount: number;
  page: number;
  pageSize: number;
  results: T[];
  filterOptions?: string[];
}

export interface IHttpClient {
  method: HttpMethods;
  contentType?: HttpContentTypes;
  params?: any;
  data?: any;
  url: string;
  token?: string | null;
  headers?: any;
}
export interface IBaseFilter {
  page: number;
  pageSize: number;
  query?: string;
}
