import React from 'react';

const options = ['option1', 'option2'];

const FormRowSelect = ({
  name,
  labelText,
  list,
  defaultValue = '',
  onChange,
}) => {
  return (
    <div className='form-control items-center'>
      <label
        htmlFor={name}
        className='form-control w-full max-w-xs'
      >
        <div className='label'>
          <span className='label-text uppercase font-bold'>
            {labelText || name}
          </span>
        </div>
        <select
          name={name}
          id={name}
          defaultValue={defaultValue}
          className='select select-bordered w-auto'
          onChange={onChange}
        >
          {list.map((itemValue) => {
            return (
              <option
                value={itemValue}
                key={itemValue}
              >
                {itemValue}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default FormRowSelect;
