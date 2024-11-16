// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';

import './App.css';

const App = () => {
  const [cars, setCars] = useState([
    { id: 1, title: 'Car 1', description: 'Description for Car 1', tags: ['SUV', 'Toyota'] },
    { id: 2, title: 'Car 2', description: 'Description for Car 2', tags: ['Sedan', 'Honda'] },
  ]);

  const handleUpdateCar = (id, updatedCar) => {
    setCars(cars.map((car) => (car.id === id ? updatedCar : car)));
  };

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const findCarById = (id) => cars.find((car) => car.id === parseInt(id));

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <CarList cars={cars} />
            }
          />
          <Route
            path="/products/:id"
            element={
              <CarDetail
                car={findCarById(window.location.pathname.split("/")[2])}
                onDelete={handleDeleteCar}
                onUpdate={handleUpdateCar}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
