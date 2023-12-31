import React from 'react';

const PolicyFilter = ({ items, setFilteredItems }) => {
  const handleFilterChange = (daysAgo) => {
    const currentDate = new Date();
    const filteredPolicies = items.filter((policy) => {
      const policyDate = new Date(policy.soldDate);
      const differenceInDays = Math.floor((currentDate - policyDate) / (1000 * 60 * 60 * 24));
      return differenceInDays <= daysAgo;
    });

    setFilteredItems(filteredPolicies);
  };

  return (
    <div>
      <h2>Policy Filter</h2>
      <button onClick={() => handleFilterChange(3)}>Last 3 Days</button>
      <button onClick={() => handleFilterChange(7)}>Last 7 Days</button>
      <button onClick={() => handleFilterChange(12)}>Last 12 Days</button>
      <button onClick={() => setFilteredItems(items)}>Clear Filter</button>
    </div>
  );
};

export default PolicyFilter;
