import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://newsapi.org',
  params: {
    apiKey: 'e5c8ab4597044cab9988aa7058507832',
  },
});
