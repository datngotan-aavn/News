import React from 'react';
import {FlatList, View} from 'react-native';
import {Article} from '../../api/useFetchingNews';
import useNewsStore from '../../core/News';
import ArticleCard from '../News/components/ArticleCard';

const renderNewsItem = ({item}: {item: Article}) => {
  return <ArticleCard article={item} />;
};
export function FavoriteScreen() {
  const favoriteArticles = useNewsStore(state => state.favoriteArticles);

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
