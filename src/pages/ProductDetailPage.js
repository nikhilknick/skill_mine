import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetailPage = ({ addToCart }) => {
	const { id } = useParams();
	const [productDetail, setProductsDetail] = useState(null);

	const fetchProductDetail = () => {
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((response) => {
				setProductsDetail(response.data);
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchProductDetail();
	}, []);
	return (
		<div className="py-10">
			{productDetail !== null && (
				<div className="max-w-screen-lg m-auto">
					<div className="flex flex-col md:flex-row pt-20 px-10 ">
						<img src={productDetail.image} alt={productDetail.image} className="h-72" />
						<div className="md:ml-10">
							<h2 className="mb-5 mt-10 md:mt-0">{productDetail.title}</h2>
							<h2 className="mb-5 mt-10 md:mt-0">{productDetail.description}</h2>
							<button className="button font-bold text-lg" onClick={() => addToCart(productDetail)}>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetailPage;
