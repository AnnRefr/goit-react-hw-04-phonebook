import React from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export function Filter({ filter, onChange }) {
  return (
    <label className={css.label}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
