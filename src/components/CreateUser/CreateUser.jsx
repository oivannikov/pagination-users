import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { createdUser } from '../../api/users';

import './CreateUser.css';

export function CreateUser({ upDateUsers }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [desc, setDesc] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const user = {
      name,
      surname,
      desc,
      avatar: null,
    }

    if (name && surname && desc) {
       await createdUser(user);
       upDateUsers();
    }

    setName('');
    setSurname('');
    setDesc('');
  }

  return (
    <div className="newUsers">
      <h5>Create a new user: </h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="New Name"
          required
        />
        <input
          type="text" 
          name="surname" 
          value={surname} 
          onChange={({ target }) =>  setSurname(target.value)} 
          placeholder="New Surname"
          required
        />
        <textarea
          className="info__user-text newUser__about"
          type="textarea"
          name="info"
          value={desc}
          onChange={({ target }) => setDesc(target.value)}
          placeholder="About You"
          required
        ></textarea>
        <button className="waves-effect waves-light btn newUser__button" type="submit">Add</button>
      </form>
    </div>
  );
}

CreateUser.propTypes = {
  upDateUsers: PropTypes.func.isRequired,
}
