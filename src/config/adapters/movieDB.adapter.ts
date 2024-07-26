/* eslint-disable prettier/prettier */
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6fec06a6d6027512b8d583e2b4977ae1',
    language: 'es',
  },
});
