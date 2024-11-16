// src/pages/ProductList.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [cars] = useState([
    { id: 1, title: 'Car 1', description: 'Description for Car 1' },
    { id: 2, title: 'Car 2', description: 'Description for Car 2' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCars = cars.filter(
    (car) =>
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Your Cars</h2>
      <input
        type="text"
        placeholder="Search cars"
        value={searchQuery}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded"
      />
      <div>
        {filteredCars.map((car) => (
          <div key={car.id} className="border mb-2 p-2">
            <Link to={`/products/${car.id}`}>
              <h3 className="text-xl">{car.title}</h3>
              <p>{car.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
