import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './Contexts/ProductContext';
import CartContext from './Contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<CartContext.Provider value={{cart}}>
			<Navigation />
			<ProductContext.Provider value={{products, addItem}}>
			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
