import { createBrowserRouter } from 'react-router-dom'
import AddProduct from '../layout/Dashboard/AddProduct'
import Dashboard from '../layout/Dashboard/Dashboard'
import ProductList from '../layout/Dashboard/ProductList'
import Main from '../layout/Main/Main'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import TopRated from '../pages/TopRated'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'top-rated',
				element: <TopRated />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
		],
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
		children: [
			{
				path: '/dashboard',
				element: <ProductList />,
			},
			{
				path: 'add-product',
				element: <AddProduct />,
			},
		],
	},
])

export default routes
