import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://effective-space-cod-5wqpxrjjpvw3664-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-5 bg-body rounded">
      <h2 className="card-title text-info mb-4">Teams</h2>
      <table className="table table-hover table-bordered">
        <thead className="table-info">
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>{team.members && team.members.map(member => member.username).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-outline-info mt-3">Create Team</button>
    </div>
  );
}

export default Teams;
