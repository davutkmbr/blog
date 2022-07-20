import type { Tag } from "./tag";

export interface Article {
  id: number;
  attributes: {
    title: string;
    content: string;
    contentHTML: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    slug: string;
    tags: {
      data: Tag[];
    };
  };
}
