import { HttpContentTypes, HttpMethods } from "@/types";

export interface BaseReducerState {
  message?: any;
  error?: any;
  loading?: boolean;
  title?: string | null;
}

export interface BaseSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

export interface ApiResponse<T> {
  code: string;
  message: string;
  data?: T;
}

export interface PagedResults<T> {
  totalPages: number;
  totalCount: number;
  page: number;
  pageSize: number;
  results: T[];
  filterOptions?: string[];
}

export interface HttpClient {
  method: HttpMethods;
  contentType?: HttpContentTypes;
  params?: any;
  data?: any;
  url: string;
  token?: string | null;
  headers?: any;
}
export interface BaseFilter {
  page: number;
  pageSize: number;
  query?: string;
}
