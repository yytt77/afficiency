import React, { useState } from 'react';

// Utility function for formatting dates
const formatDate = () => {
  const date = new Date();
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};

const CreatePolicy = ({ seller, items, setItems }) => {
  const [selectedAgent, setSelectedAgent] = useState(seller[0].id);
  const [policyValue, setPolicyValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAgentChange = (event) => {
    setSelectedAgent(event.target.value);
  };

  const handlePolicyValueChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) || value === '') {
      setPolicyValue(value);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a valid numeric value.');
    }
  };

  const handleCreatePolicy = () => {
    const newItemValue = Number(policyValue);

    if (items.some((policy) => policy.value === newItemValue)) {
      setErrorMessage('Policy with this value already exists.');
      return;
    }

    const newItems = {
      id: items.length,
      value: newItemValue,
      soldDate: formatDate(), // Use the utility function
    };

    setItems([...items, newItems]);

    setSelectedAgent(seller[0].id);
    setPolicyValue('');
    setErrorMessage('');
  };

  return (
    <div>
      <h2>Create Policy</h2>
      <form>
        <label>
          Select Agent:
          <select value={selectedAgent} onChange={handleAgentChange}>
            {seller.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Policy Value:
          <input type="text" value={policyValue} onChange={handlePolicyValueChange} />
        </label>
        <br />
        <button type="button" onClick={handleCreatePolicy}>
          Create Policy
        </button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CreatePolicy;
