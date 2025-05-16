import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://effective-space-cod-5wqpxrjjpvw3664-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-5 bg-body rounded">
      <h2 className="card-title text-success mb-4">Leaderboard</h2>
      <table className="table table-hover table-bordered">
        <thead className="table-success">
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(entry => (
            <tr key={entry._id}>
              <td>{entry.user && entry.user.username}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-outline-success mt-3">View Full Leaderboard</button>
    </div>
  );
}

export default Leaderboard;
