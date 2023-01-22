import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { toggle, toggleBrands } from '../features/filter/filterSlice'

const Home = () => {
	const [products, setProducts] = useState([])
	const filter = useSelector(state => state.filter)
	const { brands, stock } = filter
	const dispatch = useDispatch()
	const activeClass = 'text-white bg-indigo-500 border-white'

	console.log(products)

	useEffect(() => {
		fetch('https://moontech-server.vercel.app/products')
			.then(res => res.json())
			.then(data => setProducts(data.data))
	}, [])

	return (
		<div className="max-w-7xl gap-14 mx-auto my-10">
			<div className="mb-10 flex justify-end gap-5">
				<button
					onClick={() => dispatch(toggle())}
					className={`border px-3 py-2 rounded-full font-semibold ${
						stock ? activeClass : ''
					}
					
				`}
				>
					In Stock
				</button>
				<button
					onClick={() => dispatch(toggleBrands('amd'))}
					className={`border px-3 py-2 rounded-full font-semibold ${
						brands.includes('amd') ? activeClass : ''
					}`}
				>
					AMD
				</button>
				<button
					onClick={() => dispatch(toggleBrands('intel'))}
					className={`border px-3 py-2 rounded-full font-semibold ${
						brands.includes('intel') ? activeClass : ''
					}`}
				>
					Intel
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
				{products.map(product => (
					<ProductCard product={product}></ProductCard>
				))}
			</div>
		</div>
	)
}

export default Home
