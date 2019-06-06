import React from 'react';
import useResources from 'useResources';

const UserList = () => {
  const users = useResources('users')
  // We can also use the Custom Hook to not necessarily fetch the array data for 'posts'/'todos', since all it is really doing is making a request to the 'jsonplaceholder' API and returning an array of whatever data is being returned by that API
  // CODE REUSE! :)

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
