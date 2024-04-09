import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigatorKey} from './constants';
import {TabNavigator} from './TabNavigator';

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name={NavigatorKey.Tab} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
