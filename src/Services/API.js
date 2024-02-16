import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getComments: builder.query({
      query: (productId) => `/products/${productId}/comments`,
    }),
    createComment: builder.mutation({
      query: ({ productId, username, comment }) => ({
        url: `/products/${productId}/comments`,
        method: 'POST',
        body: { username, comment },
      }),
    }),
    createProducts: builder.mutation({
      query: (newProductData) => ({
        url: '/products',
        method: 'POST',
        body: newProductData,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetCommentsQuery, useCreateCommentMutation, useCreateProductsMutation } = productApi;
