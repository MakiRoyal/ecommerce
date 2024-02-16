import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Components/Cart';

const CartPage = () => {
  return (
    <div>
      <h1>Page du Panier</h1>
      <Cart />
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default CartPage;
