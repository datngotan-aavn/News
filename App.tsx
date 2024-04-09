import React, {useEffect} from 'react';

import APIProvider from './src/api/APIProvider';
import {RootNavigator} from './src/navigation/RootNavigator';
import * as RNLocalize from 'react-native-localize';
import i18n from './src/translations/i18n';

export default function App() {
  useEffect(() => {
    // Set the initial language based on device locale
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);
  return (
    <APIProvider>
      <RootNavigator />
    </APIProvider>
  );
}
