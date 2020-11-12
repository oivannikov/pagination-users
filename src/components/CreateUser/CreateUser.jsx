import React, { useState } from 'react';

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

  function handleChangeName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleChangeSurname(e) {
    e.preventDefault();
    setSurname(e.target.value);
  }

  function handleChangesDesc(e) {
    e.preventDefault();
    setDesc(e.target.value);
  }



  return (
    <div className="newUsers">
      <h5>Create a new user: </h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChangeName(e)}
          placeholder="New Name"
        />
        <input
          type="text" 
          name="surname" 
          value={surname} 
          onChange={(e) => handleChangeSurname(e)} 
          placeholder="New Surname"
        />
        <textarea
          className="info__user-text newUser__about"
          type="textarea"
          name="info"
          value={desc}
          onChange={(e) => handleChangesDesc(e)}
          placeholder="About You"
          required
        ></textarea>
        <button className="waves-effect waves-light btn newUser__button" type="submit">Add</button>
      </form>
    </div>
  )
} 