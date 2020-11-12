import React, { useEffect, useState } from 'react';

import { deleteUser, editCurrentUser } from '../../api/users';

import { upDateUsers } from '../../App';

import './SelectedUser.css';

export function SelectedUser({ setModalActive, currentUser, upDateUsers}) {
  const { name, surname, desc, id } = currentUser;
  const [currentName, setCurrentName] = useState(name);
  const [currentSurname, setCurrentSurname] = useState(surname);
  const [currentDesc, setCurrentDesc] = useState(desc);

  function handleInputName(e) {
    e.preventDefault();
    setCurrentName(e.target.value);
  }

  function handleInputSurname(e) {
    e.preventDefault();
    setCurrentSurname(e.target.value);
  }

  function handleInputDesc(e) {
    e.preventDefault();
    setCurrentDesc(e.target.value);
  }

  async function handleSaveButton(e) {
    e.preventDefault();

    const user = {
      name: currentName,
      surname: currentSurname,
      desc: currentDesc,
    }

    await editCurrentUser(id, user);
    upDateUsers();
    setModalActive(false);
  }

  function handleCancalButton(e) {
    e.preventDefault();
    setCurrentName(name);
    setCurrentSurname(surname);
    setCurrentDesc(desc);
    setModalActive(false);
  }

  async function handleDeleteUser(e) {
    e.preventDefault();
    await deleteUser(id);
    upDateUsers();
    setModalActive(false);
  }

  useEffect(() => {
    setCurrentName(name);
    setCurrentSurname(surname);
    setCurrentDesc(desc);
  }, [currentUser]);

  return (
    <div className="info">

      <div className="info__user-content">
        <div className="info__user-fullname">
          <div className="info__user-name">
            <input  
              type="text"
              value={currentName}
              onChange={(e) => handleInputName(e)}
            />
          </div>

          <div className="info__user-surname">
            <input
              type="text"
              value={currentSurname}
              onChange={(e) => handleInputSurname(e)}
            />
          </div>
      </div>

       <div className="info__user-description">
        <textarea
          className="info__user-text"
          type="textarea"
          name="info"
          value={currentDesc}
          onChange={(e) => handleInputDesc(e)}
          required
        ></textarea>
       </div>
      </div>

      <div className="info__user-buttons">
        <div>
          <button className="info__user-delete" onClick={(e) => handleDeleteUser(e)}>Delete user</button>          
        </div>
  
        <div>
          <button className="info__user-cancel" onClick={(e) => handleCancalButton(e)}>Cancel</button>
          <button className="info__user-save" onClick={(e) => handleSaveButton(e)}>Save</button>
        </div>
      </div>
    </div>
  )
}
