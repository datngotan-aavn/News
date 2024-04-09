import React, {memo} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Star} from '../icons/Star';

export const Card = memo(
  ({
    name,
    description,
    onPress,
    isFavorite,
    onPressFavorite,
  }: {
    name: string;
    description: string;
    onPress: () => void;
    isFavorite: boolean;
    onPressFavorite: () => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="flex-row p-2 m-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg border-2 border-purple-700">
        <View className="flex-1">
          <Text className="font-bold text-lg text-red-500">{name}</Text>
          <Text className="text-gray-700 mt-1">{description}</Text>
        </View>
        <TouchableOpacity onPress={onPressFavorite} className="ml-2">
          <Star color={isFavorite ? '#F0B323' : 'grey'} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  },
  (prev, curr) => {
    return (
      prev.name === curr.name &&
      prev.description === curr.description &&
      prev.isFavorite === curr.isFavorite
    );
  },
);
