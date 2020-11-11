import React from 'react';

export function Pagination({ countPages, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= countPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      { pageNumbers.map(number =>  (
        <li className="waves-effect" key={number} >
          <a onClick={() => paginate(number)}  href="#">{number}</a>
        </li>
      ))}
  </ul>
  )
}