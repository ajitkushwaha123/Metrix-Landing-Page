import React from 'react'
import Icon from './Icon'

const InputField = ({title , icon , type , placeholder , inputChange , inputValue }) => {

  const handleChange = (e) => {
    inputChange(e.target.value);
  }
  return (
    <div>
      <div>
        <label
          className="block text-sm text-gray-500 dark:text-gray-300"
        >
          {title}
        </label>

        <div className="flex items-center mt-2">
          <span className="absolute">
            <span className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500">
              <p className="mx-3 text-[20px]"><Icon name={icon} /></p>
            </span>
          </span>

          <input
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-300 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={inputValue}
          />
        </div>
      </div>
    </div>
  );
}

export default InputField
