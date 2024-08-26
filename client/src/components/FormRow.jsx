import React from 'react';

const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className='grid'>
      <label
        htmlFor={name}
        className='grid'
      >
        <span className='label uppercase font-bold '>{labelText || name}</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='input input-bordered text-accent-content grid'
        defaultValue={defaultValue || ''}
        required
      />
    </div>
  );
};

export default FormRow;
