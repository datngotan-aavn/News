import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {WebViewProps, WebViewScreen} from '../screens/WebView';
import {AppScreens} from '../screens/constants';
import {NewsScreen} from '../screens/News';
import {NavigatorKey} from './constants';

export type NewsStackParamList = {
  [NavigatorKey.News]: {
    screen: keyof Omit<NewsStackParamList, 'NewsNavigator'>;
    params: {[key: string]: any};
  };
  [AppScreens.News]: undefined;
  [AppScreens.WebView]: WebViewProps;
};

const Stack = createStackNavigator<NewsStackParamList>();

export type NewsNavigator = StackNavigationProp<
  NewsStackParamList,
  NavigatorKey.News
>;
export const NewsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        cardOverlayEnabled: false,
        headerShown: true,
        animationTypeForReplace: 'pop',
      })}>
      <Stack.Screen name={AppScreens.News} component={NewsScreen} />
      <Stack.Screen name={AppScreens.WebView} component={WebViewScreen} />
    </Stack.Navigator>
  );
};
