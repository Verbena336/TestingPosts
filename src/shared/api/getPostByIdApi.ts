import { commonApi } from 'shared/api/commonApi';
import { postResponce } from './types';

const postsApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getPostById: build.query<postResponce, { id: string }>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPostByIdQuery } = postsApi;
