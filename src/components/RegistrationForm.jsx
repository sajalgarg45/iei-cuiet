import React, { useState } from 'react';
import InputField from './InputField';
import RadioButton from './RadioButton';
import SelectField from './SelectField';

export const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        department: '',
        chitkaraEmail: '',
        contactNo: '',
        gender: 'male',
        year: '1st Year',
        scholarType: 'Hosteller',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

  return (
    <form onSubmit={handleSubmit} className='mt-6'>
    <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder=" "
        required
    />
    <InputField
        label="Roll No"
        type="text"
        name="rollNo"
        value={formData.rollNo}
        onChange={handleChange}
        placeholder=" "
        required
    />
    <InputField
        label="Department"
        type="text"
        name="depertment"
        value={formData.depertment}
        onChange={handleChange}
        placeholder=" "
        required
    />
    <InputField
        label="Chitkara Email id "
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder=" "
        required
    />
    <InputField
        label="Contact Number"
        type="number"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder=" "
        required
    />


    <div>
        <label htmlFor="gender" className="block text-gray-500">
            Gender
        </label>
        <RadioButton
            label="Male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
        />
        <RadioButton
            label="Female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
        />
    </div>

    <div>
        <label htmlFor="scholarType" className="block text-gray-500">
            You are
        </label>
        <RadioButton
            label="Hosteller"
            name="scholarType"
            value="Hosteller"
            checked={formData.scholarType === 'Hosteller'}
            onChange={handleChange}
        />
        <RadioButton
            label="Day Scholar"
            name="scholarType"
            value="Day Scholar"
            checked={formData.scholarType === 'Day Scholar'}
            onChange={handleChange}
        />
    </div>


    <SelectField
        label="Year"
        name="year"
        value={formData.year}
        onChange={handleChange}
        options={['1st Year', '2nd Year', '3rd Year', '4th Year']}
    />


    <button
        type='submit'
        className='text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-orange-500 rounded-xl hover:bg-orange-700'
    >
        Submit
    </button>
</form>
  )
}
