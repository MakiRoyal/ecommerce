import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (id) => `/products/${id}/comments`,
    }),
  }),
});

export const { useGetCommentsQuery } = commentApi;
