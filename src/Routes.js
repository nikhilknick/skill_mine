import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

const Routes = () => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		console.log('added to cart',item);
		let items = [...cartItems, item]
		setCartItems(items)
	};

	return (
		<>
			<Header cartItems={cartItems} />
			<Switch>
				<Route path="/" exact render={() => <HomePage />} />
				<Route
					path="/product/:id"
					exact
					render={() => <ProductDetailPage addToCart={addToCart} />}
				/>
			</Switch>
		</>
	);
};

export default Routes;
