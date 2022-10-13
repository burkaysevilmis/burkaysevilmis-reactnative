import {Category, CategoriesModel} from 'src/models/categories';
import {Product, ProductRequest, ProductsModel} from 'src/models/product';
import {apiSlice} from '../apiService';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.mutation<CategoriesModel<Category[]>, {_id: string}>(
      {
        query: credentials => ({
          url:
            credentials._id !== '-1'
              ? '/categories/' + credentials._id
              : '/categories',
          method: 'GET',
        }),
      },
    ),
    getProducts: builder.mutation<ProductsModel<Product[]>, {_id: string}>({
      query: credentials => ({
        url:
          credentials._id !== '-1'
            ? '/products/' + credentials._id
            : '/products',
        method: 'GET',
      }),
    }),
    addProducts: builder.mutation<ProductsModel<Product>, ProductRequest>({
      query: credentials => ({
        url: '/products',
        method: 'POST',
        body: {...credentials},
      }),
    }),
  }),
});
export const {useGetCategoriesMutation, useGetProductsMutation,useAddProductsMutation} = authApiSlice;
