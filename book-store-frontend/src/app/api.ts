import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import endpoints from '../config/endpoints.json';

export const API = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${endpoints.api.url}:${endpoints.api.port}`,
  }),
  endpoints: (build) => ({
    getStoresData: build.query({
      query: () => `stores`,
    }),
    getBooksData: build.query({
      query: () => `books`,
    }),
    getAuthorsData: build.query({
      query: () => `authors`,
    }),
    getCountryById: build.query({
      query: (id: string) => `countries/${id}`,
    }),
    setNewRating: build.mutation({
      query: ({ id, rating }) => {
        const patch = {
          data: {
            id,
            type: 'stores',
            attributes: { rating },
          },
        };

        return {
          url: `stores/${id}`,
          method: 'PATCH',
          body: patch,
        };
      },
    }),
  }),
});

export const {
  useGetStoresDataQuery,
  useGetBooksDataQuery,
  useGetAuthorsDataQuery,
  useGetCountryByIdQuery,
  useSetNewRatingMutation,
} = API;
