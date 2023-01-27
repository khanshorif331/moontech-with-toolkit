import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://moontech-server.vercel.app',
	}),
	endpoints: builder => ({
		getProducts: builder.query({
			query: () => '/products',
		}),
		addProduct: builder.mutation({
			query: data => ({
				url: '/product',
				method: 'POST',
				body: data,
			}),
		}),
	}),
})

export const { useGetProductsQuery } = productApi
