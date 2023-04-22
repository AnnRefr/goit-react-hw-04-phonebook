import React from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export function Filter({ name, onChange }) {
  return (
    <label className={css.label}>
      <p>Find contacts by name</p>
      <input type="text" name={name} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
