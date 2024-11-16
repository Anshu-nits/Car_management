// src/components/CarList.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CarList = ({ cars }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCars = cars.filter(
    (car) =>
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Your Cars</h2>
      <input
        type="text"
        placeholder="Search cars"
        value={searchQuery}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded w-full"
      />
      <div>
        {filteredCars.map((car) => (
          <div key={car.id} className="border mb-2 p-2">
            <Link to={`/products/${car.id}`}>
              <h3 className="text-xl">{car.title}</h3>
              <p>{car.description}</p>
              <p>Tags: {car.tags.join(', ')}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
