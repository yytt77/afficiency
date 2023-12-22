// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreatePolicy from './CreatePolicy';
import PolicyFilter from './PolicyFilter';

const App = () => {
    const [seller] = useState([
        { id: 0, age: 28, name: 'Alice', soldItems: [0, 1] },
        { id: 1, age: 32, name: 'Bob', soldItems: [2, 3] },
        { id: 2, age: 25, name: 'Charlie', soldItems: [4, 5] },
      ]);

      const [items, setItems] = useState([
        { id: 0, value: 150, soldDate: '12-08-2022' },
        { id: 1, value: 250, soldDate: '12-15-2022' },
        { id: 2, value: 350, soldDate: '12-22-2022' },
        { id: 3, value: 450, soldDate: '12-01-2022' },
        { id: 4, value: 550, soldDate: '12-10-2022' },
        { id: 5, value: 650, soldDate: '12-18-2022' },
      ]);
  const [filteredItems, setFilteredItems] = useState([]);


  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/create-policy">Create Policy</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route
            path="/dashboard"
            element={<Dashboard seller={seller} items={items} />}
            />
            <Route
            path="/create-policy"
            element={<CreatePolicy seller={seller} items={items} setItems={setItems} />}
            />
            <Route
            path="/"
            element={<PolicyFilter items={items} filteredItems={setFilteredItems} />}
            />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;
