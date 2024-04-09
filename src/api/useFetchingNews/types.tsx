export interface NewsResponse {
  status: string;
  sources: Article[];
}

export interface Article {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  language: string;
  country: string;
}

export enum Category {
  General = 'general',
  Business = 'business',
  Sports = 'sports',
  Technology = 'technology',
}
export interface FetchingNewsParams {
  category: Category;
}
