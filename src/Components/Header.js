import React from 'react';
import { useCart } from '../Context/CartContext';

const Header = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>Mon Site</h1>
      <p>Articles dans le panier : {cart.items.length}</p>
    </div>
  );
};

export default Header;
