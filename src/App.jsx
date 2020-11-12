import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { actionSetUsers, actionSetSelectedUser, actionUpDateUsers } from './redux/actions';

import { Users } from './components/Users/Users';
import { Pagination } from './components/Pagination/Pagination';
import { SelectedUser } from './components/SelectedUser/SelectedUser';
import { Modal } from './components/Modal/Modal';
import { CreateUser } from './components/CreateUser/CreateUser';

import { getUsers } from './api/users';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const currentUser = useSelector(state => state.currentUser);

  useEffect(() => {
    getUsers().then(users => {
      dispatch(actionSetUsers(users))
    });
  }, []);

  async function upDateUsers() {
    const users = await getUsers();

    dispatch(actionUpDateUsers(users));
  }

  function paginate(numberPage) {
    setCurrentPage(numberPage);
  }

  function handleSelectedUser(currentUser) {
    dispatch(actionSetSelectedUser(currentUser));
    setModalActive(true);
  }

  const usersPerPage = 5;
  const countPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container">
      <Users
        users={currentUsers}
        handleSelectedUser={handleSelectedUser}
      />

      <Modal active={modalActive} setActive={setModalActive}>
        <SelectedUser setModalActive={setModalActive} currentUser={currentUser} upDateUsers={upDateUsers}/>
      </Modal>

      <CreateUser upDateUsers={upDateUsers}/>
      <Pagination countPages={countPages} paginate={paginate} />
    </div>
  );
}

export default App;
