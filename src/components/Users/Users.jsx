import  React from 'react';

import './Users.css';

export function Users({ users, handleSelectedUser }) {
  return (
    <ul className="users">
      { users.map(user => (
        <li
          className="user"
          onClick={() => handleSelectedUser(user)}
          key={user.id}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}
