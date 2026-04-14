import axios from "axios";
import { get } from "./request";

export async function apiGetNewsList(params: {
    current: number;
    pageSize: number;
    categoryId?: number;
    title?: string;
}) {
   return get("/article/list", {
    ...params,
    departmentId: 4,
  });
}

export function apiGetNewsByUrl(slug: string) {
  return get(`/article/${slug}`);
}

export function apiGetMetaNews(slug: string) {
  return get(`/post/meta/${slug}`);
}