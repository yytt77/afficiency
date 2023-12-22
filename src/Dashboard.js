import React from 'react';

const Dashboard = ({ agents, policies }) => {
  return (
    <div>
      {agents.map((agent) => (
        <div key={agent.id}>
          <h2>{agent.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Policy ID</th>
                <th>Policy Value</th>
                <th>Sold Date</th>
              </tr>
            </thead>
            <tbody>
              {agent.policiesSold
                .map((policyId) => policies.find((policy) => policy.id === policyId))
                .sort((a, b) => b.value - a.value)
                .map((policy) => (
                  <tr key={policy.id}>
                    <td>{policy.id}</td>
                    <td>{policy.value}</td>
                    <td>{policy.soldDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
