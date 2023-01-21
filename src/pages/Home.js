import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
	const [products, setProducts] = useState([])
	const activeClass = 'text-white  bg-indigo-500 border-white'

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
					// onClick={() => dispatch(toggleStock())}
					className={`border px-3 py-2 rounded-full font-semibold 
					
				`}
				>
					In Stock
				</button>
				<button
					// onClick={() => dispatch(toggleBrand('amd'))}
					className={`border px-3 py-2 rounded-full font-semibold`}
				>
					AMD
				</button>
				<button
					// onClick={() => dispatch(toggleBrand('intel'))}
					className={`border px-3 py-2 rounded-full font-semibold `}
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
