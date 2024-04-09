import {Article} from '../../api/useFetchingNews';

export interface NewsStoreState {
  favoriteArticles: Article[];
  addFavoriteArticle: (article: Article) => void;
  removeFavoriteArticle: (article: Article) => void;
}
