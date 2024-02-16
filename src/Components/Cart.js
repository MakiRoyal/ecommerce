// CommentForm.js

import React, { useState } from 'react';
import { useCreateProductsMutation } from '../Services/API'; // Assurez-vous de remplacer le chemin correctement

const CommentForm = ({ productId }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [createComment] = useCreateProductsMutation();

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComment({ productId, username, comment });
      // Réinitialise les champs du formulaire après la création du commentaire
      setUsername('');
      setComment('');
    } catch (error) {
      console.error('Erreur lors de la soumission du commentaire :', error.message);
    }
  };

  return (
    <div>
      <h2>Ajouter un commentaire</h2>
      <form onSubmit={handleCommentSubmit}>
        <label>
          Nom d'utilisateur:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Commentaire:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>
        <br />
        <button type="submit">Envoyer le commentaire</button>
      </form>
    </div>
  );
};

export default CommentForm;
