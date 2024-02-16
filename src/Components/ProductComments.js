import React from 'react';
import { useGetCommentsQuery } from '../Services/API'; 

const ProductComments = ({ productId }) => {
  const { data: comments, error, isLoading } = useGetCommentsQuery(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Commentaires du produit {productId}</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductComments;
