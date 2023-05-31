import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => 'products/categories',
    })
  })
});

export const { useGetAllCategoriesQuery } = categoryApi;
export default categoryApi;