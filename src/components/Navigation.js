
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import CartContext from '../Contexts/CartContext';



const Navigation = () => {
	const { cart } = useContext(CartContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
