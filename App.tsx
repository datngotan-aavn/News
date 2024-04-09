import React from 'react';

import APIProvider from './src/api/APIProvider';
import {RootNavigator} from './src/navigation/RootNavigator';

export default function App() {
  return (
    <APIProvider>
      <RootNavigator />
    </APIProvider>
  );
}
