export type NewsItem = {
  id: number;
  url: string;
  createdDate: string;
  title: string;
  description: string;
  thumbnail: string;
  view: number;
  categoryName?: string;
};

export type ArticleDetail = {
  id: number;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  createdDate: string;
  view: number;
  url: string;
  modifiedDate: string;
};

export type MetaArticleResponse = {
  title: string;
  description: string;
};