import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// /D:/THP/thp-portal/web/service/request.ts

type Maybe<T> = T | null | undefined;

export interface ApiResponse<T = any> {
    code?: number;
    data?: T;
    message?: string;
}

export class ApiError extends Error {
    status?: number;
    data?: any;
    constructor(message: string, status?: number, data?: any) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
    }
}

// Server instance - không sử dụng localStorage
const serverInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/',
    timeout: 10_000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Client instance - sử dụng localStorage
const clientInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/',
    timeout: 10_000,
    headers: {
        'Content-Type': 'application/json',
    },
});

let authToken: Maybe<string> = null;

export function setAuthToken(token: Maybe<string>) {
    authToken = token ?? null;
}

// Client request interceptor - có localStorage và token
clientInstance.interceptors.request.use(
    async (config) => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (authToken || token) {
            config.headers.Authorization = `Bearer ${authToken || token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor chung cho cả server và client
const responseInterceptor = (response: AxiosResponse<ApiResponse>) => {
    // If API wraps payload in { code, data, message }, return data; otherwise return raw data
    const payload = response.data;
    if (payload && (Object.prototype.hasOwnProperty.call(payload, 'data') || Object.prototype.hasOwnProperty.call(payload, 'code'))) {
        if (payload && (payload as any).code && (payload as any).code !== 0) {
            // non-zero code can be treated as error depending on backend convention
            throw new ApiError(payload.message || 'API Error', (payload as any).code, payload);
        }
        return payload as any;
    }
    return response.data as any;
};

const errorInterceptor = (error: any) => {
    if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
            return null;
        }
        const msg = (data && data.message) || error.message || 'Request failed';
        return Promise.reject(new ApiError(msg, status, data));
    }
    if (error.request) {
        return Promise.reject(new ApiError('No response received from server'));
    }
    return Promise.reject(new ApiError(error.message));
};

serverInstance.interceptors.response.use(responseInterceptor, errorInterceptor);
clientInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

// Request cho server - không có localStorage
export async function serverRequest<T = any>(config: AxiosRequestConfig): Promise<T> {
    const res = await serverInstance.request<ApiResponse<T>>(config);
    // If response followed ApiResponse<T> shape, return data, else return what axios returned
    if (res && (res as any).data && (res as any).data.data !== undefined) {
        return (res as any).data.data as T;
    }
    return (res as unknown) as T;
}

// Request cho client - có localStorage và token
export async function clientRequest<T = any>(config: AxiosRequestConfig): Promise<T> {
    const res = await clientInstance.request<ApiResponse<T>>(config);
    // If response followed ApiResponse<T> shape, return data, else return what axios returned
    if (res && (res as any).data && (res as any).data.data !== undefined) {
        return (res as any).data.data as T;
    }
    return (res as unknown) as T;
}

// Default export sử dụng client request để tương thích ngược
export default clientRequest;

// Client convenience helpers
export const get = <T = any>(url: string, params?: any, config?: AxiosRequestConfig) =>
    clientRequest<T>({ method: 'GET', url, params, ...config });

export const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    clientRequest<T>({ method: 'POST', url, data, ...config });

export const put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    clientRequest<T>({ method: 'PUT', url, data, ...config });

export const del = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    clientRequest<T>({ method: 'DELETE', url, data, ...config });

// Server convenience helpers
export const serverGet = <T = any>(url: string, params?: any, config?: AxiosRequestConfig) =>
    serverRequest<T>({ method: 'GET', url, params, ...config });

export const serverPost = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    serverRequest<T>({ method: 'POST', url, data, ...config });

export const serverPut = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    serverRequest<T>({ method: 'PUT', url, data, ...config });

export const serverDel = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    serverRequest<T>({ method: 'DELETE', url, data, ...config });

// Export axios instances for advanced usage
export { serverInstance, clientInstance };