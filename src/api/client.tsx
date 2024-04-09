import axios from 'axios';
import Config from 'react-native-config';
export const client = axios.create({
  baseURL: Config.API_URL,
  params: {
    apiKey: Config.API_KEY,
  },
});
