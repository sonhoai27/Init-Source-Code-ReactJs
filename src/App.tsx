import * as React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id} className="card">
          <h5>{user.login}</h5>
        </div>
      ))}
    </div>
  )
}

export default App;
