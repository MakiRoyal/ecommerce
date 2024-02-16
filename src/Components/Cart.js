import React from 'react';
import { useCart } from '../Context/CartContext';

const Cart = () => {
  const { cart, removeItemFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Mon Panier</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => removeItemFromCart(item)}>Retirer du panier</button>
          </li>
        ))}
      </ul>
      <p>Total d'articles dans le panier : {cart.items.length}</p>
      <button onClick={clearCart}>Vider le panier</button>
    </div>
  );
};

export default Cart;
