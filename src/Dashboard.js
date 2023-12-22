import React from 'react';

const Dashboard = ({ seller, items }) => {
  return (
    <div>
      {seller.map((agent) => (
        <div key={agent.id}>
          <h2>{agent.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Value</th>
                <th>Sold Date</th>
              </tr>
            </thead>
            <tbody>
              {agent.soldItems
                .map((itemId) => items.find((item) => item.id === itemId))
                .sort((a, b) => b.value - a.value)
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.value}</td>
                    <td>{item.soldDate}</td>
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
