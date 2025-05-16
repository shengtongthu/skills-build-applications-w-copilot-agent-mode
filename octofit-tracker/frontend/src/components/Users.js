import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://effective-space-cod-5wqpxrjjpvw3664-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-5 bg-body rounded">
      <h2 className="card-title text-dark mb-4">Users</h2>
      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-outline-dark mt-3">Add User</button>
    </div>
  );
}

export default Users;
