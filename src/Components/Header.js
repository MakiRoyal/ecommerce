import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';


const Header = () => {
  const { cart, removeItemFromCart, clearCart } = useCart();

  if (cart.items.length === 0) {
    return <p>Le panier est vide.</p>;
  }

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title}{' '}
            <button onClick={() => removeItemFromCart(item)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Vider le panier</button>
      <Link to="/cart">Aller au Panier</Link>
    </div>
  );
};

export default Header;
