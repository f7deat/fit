import type { NewsItem } from "@/types/news";

export type NewsListParams = {
  current: number;
  pageSize: number;
  categoryId?: number;
  title?: string;
};

export type NewsListResponse = {
  succeeded: boolean;
  data: NewsItem[];
  total: number;
};

export type MetaArticleResponse = {
  title: string;
  description: string;
};