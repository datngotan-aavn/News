import React from 'react';
import {Article} from '../../../api/useFetchingNews';
import {Card} from '../../../ui/News/Card';
import useNewsStore, {
  addFavoriteArticle,
  removeFavoriteArticle,
} from '../../../core/News';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../../constants';

export default function ArticleCard({article}: {article: Article}) {
  const favoriteArticles = useNewsStore(state => state.favoriteArticles);

  const isFavorite = favoriteArticles.some(it => it.id === article.id);
  const navigation = useNavigation();

  return (
    <Card
      name={article.name}
      description={article.description}
      onPress={() => {
        navigation.navigate(AppScreens.WebView, {
          url: article.url,
        });
        // navigation.navigate(NavigatorKey.Detail, {
        //   screen: AppScreens.WebView,
        //   params: {
        //     url: article.url,
        //   },
        // });
      }}
      isFavorite={isFavorite}
      onPressFavorite={() => {
        if (isFavorite) {
          removeFavoriteArticle(article);
        } else {
          addFavoriteArticle(article);
        }
      }}
    />
  );
}
