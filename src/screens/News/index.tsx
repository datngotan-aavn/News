import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import ArticleCard from './components/ArticleCard';
import {Article, Category, useFetchingNews} from '../../api/useFetchingNews';

const renderNewsItem = ({item}: {item: Article}) => {
  return <ArticleCard article={item} />;
};

export function NewsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.General,
  );
  const {data, isError, isLoading, isFetching, error, refetch} =
    useFetchingNews({
      category: selectedCategory,
    });

  if (isError) {
    return (
      <View className="absolute left-0 right-0 bottom-0 top-0 justify-center items-center">
        <Text>{'Something wrong: ' + error}</Text>
      </View>
    );
  }
  return (
    <View className="flex-1">
      <View className="flex-grow">
        {Object.values(Category).map(value => {
          const isSelected = selectedCategory === value;

          return (
            <TouchableOpacity
              key={value}
              style={[
                styles.categoryItem,
                isSelected && styles.selectedCategoryItem,
              ]}
              onPress={() => setSelectedCategory(value)}>
              <Text
                style={
                  isSelected ? styles.selectedText : styles.unselectedText
                }>
                {value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {isLoading || isFetching ? (
        <View className="absolute left-0 right-0 bottom-0 top-0 justify-center items-center">
          <ActivityIndicator size={100} />
        </View>
      ) : (
        <FlatList
          data={data?.sources ?? []}
          renderItem={renderNewsItem}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {
                refetch();
              }}
            />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selectedCategoryItem: {
    backgroundColor: 'purple',
  },
  selectedText: {
    color: '#ffffff',
  },
  unselectedText: {
    color: '#000000',
  },
});
