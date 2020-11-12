import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import './Pagination.css';

export function Pagination({ countPages, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= countPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      { pageNumbers.map(number =>  (
        <>
          <li className={classNames("waves-effect", {active: currentPage === number})} key={number} >
            <a onClick={() => paginate(number)}  href="#">{number}</a>
          </li>
        </>
      ))}
  </ul>
  );
}

Pagination.propTypes = {
  countPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
}
