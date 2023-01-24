import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'
import productsSlice from '../features/products/productsSlice'

const store = configureStore({
	// devTools : false, // disable redux devtools
	reducer: {
		cart: cartSlice,
		filter: filterSlice,
		products: productsSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
})

export default store
