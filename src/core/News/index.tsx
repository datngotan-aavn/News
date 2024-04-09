import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {zustandStorage} from '../Storage';

import {NewsStoreState} from './types';
const NEWS_STORAGE = 'NEWS_STORAGE';
const useNewsStore = create(
  persist<NewsStoreState>(
    (set, get) => ({
      favoriteArticles: [],
      addFavoriteArticle: article => {
        if (!get().favoriteArticles.some(it => it.id === article.id)) {
          set({favoriteArticles: [...get().favoriteArticles, article]});
        }
      },
      removeFavoriteArticle: article => {
        set({
          favoriteArticles: get().favoriteArticles.filter(
            it => it.id !== article.id,
          ),
        });
      },
    }),
    {
      name: NEWS_STORAGE,
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export const addFavoriteArticle = useNewsStore.getState().addFavoriteArticle;
export const removeFavoriteArticle =
  useNewsStore.getState().removeFavoriteArticle;

export default useNewsStore;
