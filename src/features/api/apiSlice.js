import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://moontech-server.vercel.app',
	}),
	endpoints: builder => ({
		getProduct: builder.query({
			query: () => '/products',
		}),
	}),
})
