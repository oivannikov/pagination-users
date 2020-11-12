import  React from 'react';

import PropTypes from 'prop-types';

import './Users.css';

export function Users({ users, handleSelectedUser }) {
  return (
    <ul className="users">
      { users.map(user => (
        <li className="user" onClick={() => handleSelectedUser(user)} key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

Users.propTypes = {
  handleSelectedUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
}
