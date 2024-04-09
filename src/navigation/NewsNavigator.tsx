import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WebViewProps, WebViewScreen} from '../screens/WebView';
import {AppScreens} from '../screens/constants';
import {NewsScreen} from '../screens/News';

export type NewsStackParamList = {
  [AppScreens.News]: undefined;
  [AppScreens.WebView]: WebViewProps;
};

const Stack = createStackNavigator<NewsStackParamList>();

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
