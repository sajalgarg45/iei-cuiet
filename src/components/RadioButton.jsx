import React from 'react';

function RadioButton({ label, name, value, checked, onChange }) {
  return (
    <div className="mt-1">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-blue-600 dark:text-blue-500 text-gray-500"
      />
      <label htmlFor={value} className="ml-2 text-gray-500">
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
