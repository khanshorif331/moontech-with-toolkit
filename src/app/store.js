import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'

const store = configureStore({
	// devTools : false, // disable redux devtools
	reducer: {
		cart: cartSlice,
		filter: filterSlice,
	},
})

export default store
