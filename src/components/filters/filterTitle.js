import React from 'react';

const filterTitle = ({ name }) => {
  const lowercaseName = name.toLowerCase();

  return (
    <div className='filter-title'>
      <input
        type='checkbox'
        id={lowercaseName}
        name={lowercaseName}
        // onChange={checkboxChange}
      />
      <span className='checkmark'></span>
      <div>{name}</div>
    </div>
  );
};

export default filterTitle;
