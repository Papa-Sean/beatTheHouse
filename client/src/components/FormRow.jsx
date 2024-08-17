import React from 'react';

const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className='form-control items-center text-left align-element'>
      <label
        htmlFor={name}
        className='form-control w-full max-w-xs'
      >
        <span className='label uppercase font-bold '>{labelText || name}</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='input input-bordered text-accent-content w-fit'
        defaultValue={defaultValue || ''}
        required
      />
    </div>
  );
};

export default FormRow;
