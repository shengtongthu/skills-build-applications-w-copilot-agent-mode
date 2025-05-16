import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://effective-space-cod-5wqpxrjjpvw3664-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-5 bg-body rounded">
      <h2 className="card-title text-warning mb-4">Workouts</h2>
      <table className="table table-hover table-bordered">
        <thead className="table-warning">
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout._id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-outline-warning mt-3">Add Workout</button>
    </div>
  );
}

export default Workouts;
