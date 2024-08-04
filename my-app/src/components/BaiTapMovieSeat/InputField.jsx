import React from 'react';

const InputField = ({ label, id, type = 'text', required = false, value, onChange, disabled = false }) => {
    return (
        <div className='inputField'>
            <label className='text-base font-bold'>
                {label} <span className='text-red-600 font-bold mr-3'>{required && '*'}</span>
            </label>
            <input
                type={type}
                id={id}
                className='border-white p-4 w-80 rounded-md text-base mt-3'
                required={required}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export default InputField;
