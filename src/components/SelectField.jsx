import React from 'react';

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div className="mb-6">
      <label className="block text-sm text-gray-500 dark:text-gray-400">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
