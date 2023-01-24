import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'
import logger from 'redux-logger'

const store = configureStore({
	// devTools : false, // disable redux devtools
	reducer: {
		cart: cartSlice,
		filter: filterSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export default store
