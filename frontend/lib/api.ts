import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type Method,
} from "axios";

type ApiRequestOptions = {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  credentials?: RequestCredentials;
};

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  validateStatus: () => true,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});

export async function apiRequest<T = any>(
  url: string,
  options: ApiRequestOptions = {},
): Promise<AxiosResponse<T>> {
  const parsedUrl = url.startsWith("http") ? new URL(url) : null;
  const requestUrl = parsedUrl
    ? `${parsedUrl.pathname}${parsedUrl.search}`
    : url;

  let data: unknown;

  if (typeof options.body === "string") {
    try {
      data = JSON.parse(options.body);
    } catch {
      data = options.body;
    }
  } else if (
    typeof FormData !== "undefined" &&
    options.body instanceof FormData
  ) {
    data = options.body;
  }

  const config: AxiosRequestConfig = {
    url: requestUrl,
    method: (options.method ?? "GET") as Method,
    headers: options.headers as AxiosRequestConfig["headers"],
    data,
    withCredentials: true,
  };

  return api.request<T>(config);
}

export default api;
