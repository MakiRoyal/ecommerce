import React from 'react';
import { useGetCommentsQuery } from '../Services/CommentService';

const Comments = ({ productId }) => {
  const { data: comments, isLoading, isError } = useGetCommentsQuery(productId);

  if (isLoading) {
    return <p>Chargement des commentaires...</p>;
  }

  if (isError) {
    return <p>Une erreur s'est produite lors du chargement des commentaires.</p>;
  }

  if (!comments || comments.length === 0) {
    return <p>Aucun commentaire disponible pour ce produit.</p>;
  }

  return (
    <div>
      <h2>Commentaires du produit</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
