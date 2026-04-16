import axios from "axios";
import { get } from "./request";

export async function apiGetNewsList<T = any>(params: {
  current: number;
  pageSize: number;
  categoryId?: number;
  title?: string;
}) {
  return get<T>("/article/list", {
    ...params,
    departmentId: 4,
  });
}

export function apiGetNewsByUrl<T = any>(slug: string) {
  return get<T>(`/article/${slug}`);
}

export function apiGetMetaNews<T = any>(slug: string) {
  return get<T>(`/post/meta/${slug}`);
}