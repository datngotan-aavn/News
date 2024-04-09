import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigatorKey} from './constants';
import {WebViewProps, WebViewScreen} from '../screens/WebView';
import {AppScreens} from '../screens/constants';

export type DetailStackParamList = {
  [AppScreens.WebView]: WebViewProps;
  [NavigatorKey.Detail]: {
    screen: AppScreens.WebView;
    params: WebViewProps;
  };
};

const Stack = createStackNavigator<DetailStackParamList>();

export const DetailNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        cardOverlayEnabled: false,
        headerShown: true,
        animationTypeForReplace: 'pop',
      })}>
      <Stack.Screen name={AppScreens.WebView} component={WebViewScreen} />
    </Stack.Navigator>
  );
};
