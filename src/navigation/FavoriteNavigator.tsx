import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppScreens} from '../screens/constants';
import {WebViewProps, WebViewScreen} from '../screens/WebView';
import {FavoriteScreen} from '../screens/Favorites';

export type FavoriteStackParamList = {
  [AppScreens.Favorite]: undefined;
  [AppScreens.WebView]: WebViewProps;
};

const Stack = createStackNavigator<FavoriteStackParamList>();

export const FavoriteNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppScreens.Favorite}
      screenOptions={() => ({
        cardOverlayEnabled: false,
        headerShown: true,
        animationTypeForReplace: 'pop',
      })}>
      <Stack.Screen name={AppScreens.Favorite} component={FavoriteScreen} />
      <Stack.Screen name={AppScreens.WebView} component={WebViewScreen} />
    </Stack.Navigator>
  );
};
