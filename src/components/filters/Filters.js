import React from 'react';

const Filters = () => {
  const checkboxChange = e => {
    console.log(e.target.parentElement.parentElement.children[1]);
    const parentElement = e.target.parentElement.parentElement;
    if (e.target.checked === false) {
      parentElement.children[1].disabled = true;
    } else {
      parentElement.children[1].disabled = false;
    }
  };

  return (
    <div className='filters' style={FiltersStyle}>
      <div className='location-filter'>
        <div className='filter-title'>
          <input
            disabled
            type='checkbox'
            id='location'
            name='location'
            onChange={checkboxChange}
          />
          <label htmlFor='location'>Location</label>
        </div>
        <input
          disabled
          type='text'
          id='location-value'
          name='location-value'
          placeholder='Location...'
        />
      </div>
      <div className='language-filter'>
        <div className='filter-title'>
          <input
            type='checkbox'
            id='language'
            name='language'
            onChange={checkboxChange}
          />
          <label htmlFor='language'>Language</label>
        </div>
        <select name='language-value' id='language-value'>
          {/* values are hardcored cuz i didnt find github api to get all possible options. i put some from the top of my head, doesnt really matter */}
          <option value='javascript'>Javascript</option>
          <option value='html'>HTML</option>
          <option value='java'>Java</option>
          <option value='ruby'>Ruby</option>
          <option value='c#'>C#</option>
          <option value='php'>PHP</option>
          <option value='go'>GO</option>
        </select>
      </div>
      <div className='repos-filter'>
        <div className='filter-title'>
          <input
            type='checkbox'
            id='repos'
            name='repos'
            onChange={checkboxChange}
          />
          <label htmlFor='repos'>Repos</label>
        </div>
        <input
          type='range'
          name='repos-value'
          id='repos-value'
          min='0'
          max='1000'
        />
      </div>
    </div>
  );
};

const FiltersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Filters;
