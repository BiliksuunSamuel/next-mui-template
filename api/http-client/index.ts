import configuration from "@/configuration";
import { IHttpClient } from "@/models";
import Axios from "axios";

export function HttpClient<T>({
  method = "get",
  url,
  token,
  headers = {},
  contentType = "application/json",
  data,
  params,
}: IHttpClient): Promise<T> {
  return new Promise<T>(function (resolve, reject) {
    try {
      const axiosConfig = {
        method,
        url,
        data,
        params,
        baseURL: configuration().apiUrl,
        headers: {
          "Content-Type": contentType,
          Authorization: token ? `Bearer ${token}` : null,
          ...headers,
        },
      };
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      Axios(axiosConfig)
        .then((response) => {
          resolve(response.data as T);
        })
        .catch((error) => {
          if (error?.status === 400) {
            const errors: string[] =
              error?.response?.data?.message?.message ?? [];
            if (errors.length > 0) {
              let errormessage = "";
              errors.forEach((e) => {
                errormessage = `${errormessage}<br/>${e}`;
              });

              //remove the first <br/>
              errormessage = errormessage.replace("<br/>", "");
              reject(errormessage);
            } else {
              reject(
                error?.response?.data?.message ??
                  error?.response?.message ??
                  error?.response?.data?.error ??
                  error?.message ??
                  error?.error?.message ??
                  error?.error ??
                  error,
              );
            }
          } else {
            reject(
              error?.response?.data?.message ??
                error?.response?.message ??
                error?.response?.data?.error ??
                error?.message ??
                error?.error?.message ??
                error?.error ??
                error,
            );
          }
        });
    } catch (error: any) {
      reject(
        error?.response?.data?.message ??
          error?.response?.message ??
          error?.response?.data?.error ??
          error?.message ??
          error?.error?.message ??
          error?.error ??
          error,
      );
    }
  });
}
