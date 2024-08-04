import React from 'react';

const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className='form-control'>
      <label
        htmlFor={name}
        className='label'
      >
        <span className='label-text capitalize'>{labelText || name}</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='input input-bordered text-accent-content'
        defaultValue={defaultValue || ''}
        required
      />
    </div>
  );
};

export default FormRow;
