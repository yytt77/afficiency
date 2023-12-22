import React, { useState } from 'react';

const CreatePolicy = ({ agents, policies, setPolicies }) => {
  const [selectedAgent, setSelectedAgent] = useState(agents[0].id);
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
    const newPolicyValue = Number(policyValue);

    if (policies.some((policy) => policy.value === newPolicyValue)) {
      setErrorMessage('Policy with this value already exists.');
      return;
    }

    const newPolicy = {
      id: policies.length,
      value: newPolicyValue,
      soldDate: new Date().toLocaleDateString(),
    };

    setPolicies([...policies, newPolicy]);

    setSelectedAgent(agents[0].id);
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
            {agents.map((agent) => (
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
