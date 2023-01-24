import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: [],
	isLoading: false,
	isError: false,
	error: '',
}

export const getProducts = createAsyncThunk('products/getProduct', async () => {
	const res = await fetch('https://moontech-server.vercel.app/products')
	const data = await res.json()
	return data.data
})

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
	},
})

// export const {} = productsSlice.actions
export default productsSlice.reducer
