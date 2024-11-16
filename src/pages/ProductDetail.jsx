// src/pages/ProductDetail.jsx

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState({
    id,
    title: `Car ${id}`,
    description: `Description for Car ${id}`,
  });

  const handleEdit = () => {
    setCar({ ...car, title: 'Updated Title' });  // Example update
  };

  const handleDelete = () => {
    alert(`Deleted ${car.title}`);
    navigate('/'); // Redirect to product list
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{car.title}</h2>
      <p>{car.description}</p>
      <button onClick={handleEdit} className="bg-yellow-500 text-white p-2 rounded mt-4">
        Edit
      </button>
      <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded mt-4 ml-2">
        Delete
      </button>
    </div>
  );
};

export default ProductDetail;
