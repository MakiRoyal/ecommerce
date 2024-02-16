import React from 'react';
import { useGetProductsQuery } from '../Services/API'; 
import { useCart } from '../Context/CartContext'; 
import ErrorBoundary from './ErrorBoundary';


const ProductList = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const { addItemToCart } = useCart();

  console.log('test')

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h2>Produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}{' '}
            <button onClick={() => addItemToCart(product)}>Ajouter au panier</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductListWithErrorBoundary = () => (
  <ErrorBoundary>
    <ProductList />
  </ErrorBoundary>
);

export default ProductListWithErrorBoundary;
