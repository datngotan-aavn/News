import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigatorKey} from './constants';
import {NewsNavigator} from './NewsNavigator';
import {FavoriteNavigator} from './FavoriteNavigator';

const Tab = createBottomTabNavigator();

const getRouteIcon = (
  routeName: string,
  color: string,
  focused: boolean,
): JSX.Element => {
  let label = 'News';
  switch (routeName) {
    case NavigatorKey.News:
      label = 'News';
      break;
    case NavigatorKey.Favorite:
      label = 'Favorite';
      break;
  }
  const fontSize = focused ? 20 : 15;
  return (
    <View className="items-center pt-2">
      <Text style={{color: color, fontSize: fontSize}}>{label}</Text>
    </View>
  );
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) =>
          getRouteIcon(route.name, color, focused),
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: styles.tabIcon,
        tabBarStyle: {
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 10.0,
          elevation: 24,
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen name={NavigatorKey.News} component={NewsNavigator} />
      <Tab.Screen name={NavigatorKey.Favorite} component={FavoriteNavigator} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    marginTop: 7,
  },
  tabIcon: {
    flex: 1,
  },
});
