import React from 'react';

import PropTypes from 'prop-types';

import './Modal.css';

export function Modal({ active, setActive, children}) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)} >
      <div className={active ? 'modal__content active' : 'modal'} onClick={(e) => e.stopPropagation()} >
        {children}
      </div>
    </div>    
  );
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
}
