import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProducts, postProduct } from './productAPI'

const initialState = {
	products: [],
	isLoading: false,
	postSuccess: false,
	isError: false,
	error: '',
}

export const getProducts = createAsyncThunk('products/getProduct', async () => {
	const products = await fetchProducts()
	return products
})

export const addProduct = createAsyncThunk(
	'products/addProduct',
	async data => {
		const products = await postProduct(data)
		return products
	}
)

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(getProducts.pending, (state, action) => {
				state.isLoading = true
				state.isError = false
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.products = action.payload
				state.isLoading = false
				state.isError = false
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.products = []
				state.isLoading = false
				state.isError = true
				state.error = action.error.message
			})
			.addCase(addProduct.pending, state => {
				state.isLoading = true
				state.isError = false
				state.postSuccess = false
			})
			.addCase(addProduct.fulfilled, state => {
				state.postSuccess = true
				state.isLoading = false
				state.isError = false
			})
			.addCase(addProduct.rejected, (state, action) => {
				// state.products = []
				state.isLoading = false
				state.isError = true
				// state.error = action.error.message
				state.postSuccess = false
			})
	},
})

export default productsSlice.reducer
