import React from 'react';

import { useSelector } from 'react-redux';

export function SelectedUser() {
  const currentUser = useSelector(state => state.currentUser);
  const { name, surname, desc } = currentUser;

  return (
    <div>
      <h3>{name} {surname}</h3>
      <p>{desc}</p>
    </div>
  )
}
