import {useQuery} from '@tanstack/react-query';
import {client} from '../client';
import {FetchingNewsParams, NewsResponse} from './types';

export * from './types';

const KEY_NEWS = 'KEY_NEWS';
export const fetchNews = async (params: FetchingNewsParams) => {
  const {data} = await client.get('/v2/top-headlines/sources', {
    params: params,
  });

  return data as NewsResponse;
};

export function useFetchingNews(params: FetchingNewsParams) {
  const {category} = params;
  return useQuery({
    queryKey: [KEY_NEWS, category],
    queryFn: () => {
      return fetchNews(params);
    },
  });
}
