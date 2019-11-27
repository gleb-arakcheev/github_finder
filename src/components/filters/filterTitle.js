import React from 'react';

const filterTitle = ({ name }) => {
  const lowercaseName = name.toLowerCase();
  const uppercaseName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  return (
    <div className='filter-title'>
      <input
        type='checkbox'
        id={lowercaseName}
        name={lowercaseName}
        // onChange={checkboxChange}
      />
      <span className='checkmark'></span>
      <div>{uppercaseName}</div>
    </div>
  );
};

export default filterTitle;
