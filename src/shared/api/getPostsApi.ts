import { commonApi } from 'shared/api/commonApi';
import { postsResponce } from './types';

const postsApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<postsResponce, void>({
      query: () => ({
        url: `/posts`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
