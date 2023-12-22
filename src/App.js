// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreatePolicy from './CreatePolicy';
import PolicyFilter from './PolicyFilter';

const App = () => {
  const [agents] = useState([
    { id: 0, age: 30, name: 'nicholas', policiesSold: [0, 2] },
    { id: 1, age: 30, name: 'janice', policiesSold: [1, 3] },
    { id: 2, age: 30, name: 'kelly', policiesSold: [4, 5] },
  ]);

  const [policies, setPolicies] = useState([
    { id: 0, value: 100, soldDate: "12-05-2000" },
    { id: 1, value: 200, soldDate: "12-30-2000" },
    { id: 2, value: 300, soldDate: "12-12-2000" },
    { id: 3, value: 400, soldDate: "12-14-2000" },
    { id: 4, value: 500, soldDate: "12-07-2000" },
    { id: 5, value: 600, soldDate: "12-23-2000" },
   ]);
  const [filteredPolicies, setFilteredPolicies] = useState([]);


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
            element={<Dashboard agents={agents} policies={policies} />}
            />
            <Route
            path="/create-policy"
            element={<CreatePolicy agents={agents} policies={policies} setPolicies={setPolicies} />}
            />
            <Route
            path="/"
            element={<PolicyFilter policies={policies} setFilteredPolicies={setFilteredPolicies} />}
            />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;
