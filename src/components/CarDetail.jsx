// src/components/CarDetail.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarDetail = ({ car, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: car.title,
    description: car.description,
    tags: car.tags.join(', '),
  });
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(car.id, { ...car, ...editData, tags: editData.tags.split(', ') });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(car.id);
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{isEditing ? 'Edit Car' : car.title}</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleChange}
            className="mb-2 p-2 border rounded w-full"
          />
          <textarea
            name="description"
            value={editData.description}
            onChange={handleChange}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="tags"
            value={editData.tags}
            onChange={handleChange}
            className="mb-2 p-2 border rounded w-full"
          />
          <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded mr-2">
            Save
          </button>
          <button onClick={handleEditToggle} className="bg-gray-500 text-white p-2 rounded">
            Cancel
          </button>
        </>
      ) : (
        <>
          <p className="mb-2">{car.description}</p>
          <p className="mb-2">Tags: {car.tags.join(', ')}</p>
          <button onClick={handleEditToggle} className="bg-yellow-500 text-white p-2 rounded mr-2">
            Edit
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default CarDetail;
