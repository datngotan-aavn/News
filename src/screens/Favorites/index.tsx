import React from 'react';
import {FlatList, View} from 'react-native';
import {Article} from '../../api/useFetchingNews';
import {NewsItem} from '../../ui/News/NewsItem';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../constants';
import useNewsStore, {
  addFavoriteArticle,
  removeFavoriteArticle,
} from '../../core/News';

export function FavoriteScreen() {
  const favoriteArticles = useNewsStore(state => state.favoriteArticles);
  const navigation = useNavigation();

  const renderNewsItem = ({item}: {item: Article}) => {
    const isFavorite = favoriteArticles.some(article => article.id === item.id);
    return (
      <NewsItem
        name={item.name}
        description={item.description}
        onPress={() => {
          navigation.navigate(AppScreens.WebView, {
            url: item.url,
          });
        }}
        isFavorite={isFavorite}
        onPressFavorite={() => {
          if (isFavorite) {
            removeFavoriteArticle(item);
          } else {
            addFavoriteArticle(item);
          }
        }}
      />
    );
  };
  return (
    <View className="flex-1">
      <FlatList
        data={favoriteArticles ?? []}
        renderItem={renderNewsItem}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
