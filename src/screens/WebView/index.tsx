import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NewsStackParamList} from '../../navigation/NewsNavigator';
import {AppScreens} from '../constants';

export type WebViewProps = {
  url?: string;
};

export const WebViewScreen = ({
  route,
}: NativeStackScreenProps<NewsStackParamList, AppScreens.WebView>) => {
  const [isLoading, setIsLoading] = useState(false);
  const {url} = route.params;

  return (
    <>
      <View className="flex-1">
        <WebView
          style={styles.webView}
          source={{uri: url}}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />
        {isLoading && (
          <View className="absolute left-0 right-0 bottom-0 top-0 justify-center items-center">
            <ActivityIndicator />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  webView: {
    backgroundColor: 'white',
    flex: 1,
  },
});
