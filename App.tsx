import React from 'react';
import {Text, View} from 'react-native';

import APIProvider from './src/api/APIProvider';
import {env} from './src/config';

export default function App() {
  console.log(env);
  return ( 
    <APIProvider>
      <View className="flex-1 justify-center items-center">
        <Text>{env}</Text>
      </View>
    </APIProvider>
  );
}
