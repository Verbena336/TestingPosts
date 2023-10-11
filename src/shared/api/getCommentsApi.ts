import { commonApi } from 'shared/api/commonApi';
import { commentsResponce } from './types';

const commentsApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query<commentsResponce, { id: string }>({
      query: ({ id }) => ({
        url: `/comments?postId=${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
