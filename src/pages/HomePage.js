import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const HomePage = () => {
	const [categories, setCategories] = useState([[]]);
	const [products, setProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const fetchCategories = () => {
		axios
			.get('https://fakestoreapi.com/products/categories')
			.then((response) => {
				setCategories(response.data);
				setSelectedCategory(response.data[0]);
				fetchProducts(response.data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		//Fetch categories
		fetchCategories();
	}, []);

	const fetchProducts = (selectedCategory) => {
		setSelectedCategory(selectedCategory);

		axios
			.get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
			.then((response) => {
				console.log(response);
				setProducts(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<section className="bg-red-200">
				<Banner />
			</section>
			<section className="">
				<h1 className="text-center my-24 font-bold text-3xl ">High Range of products</h1>

				{/* Display Categories */}
				<div className="max-w-screen-lg m-auto my-10 px-10">
					{categories && (
						<div className="flex flex-col md:flex-row justify-between">
							{categories.map((category) => (
								<p
									className={`${
										selectedCategory === category ? 'bg-purple-500' : ''
									} cursor-pointer border-2 border-purple-500 text-black font-bold p-3 rounded-lg mb-2`}
									onClick={() => fetchProducts(category)}
								>
									{category}
								</p>
							))}
						</div>
					)}
				</div>

				{/* Fetch result according to categories */}

				<div className="max-w-screen-lg m-auto my-10">
					{products && (
						<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20 mx-auto text-center p-10">
							{products.map((product) => (
								<Link to={`/product/${product.id}`}>
									<div className="flex flex-col items-center mb-10">
										<img className="h-40 w-40 mb-5" src={product.image} alt={product.image} />
										<p>{product.title}</p>
									</div>
								</Link>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default HomePage;
