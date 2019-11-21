import React from 'react';

const Filters = () => {
  const checkboxChange = e => {
    // console.log(
    //   e.target.parentElement.parentElement.querySelector(
    //     'input[type=text], select, input[type=range]'
    //   )
    // );
    const parentElement = e.target.parentElement.parentElement;
    const switchingElement = parentElement.querySelector(
      'input[type=text], select, input[type=range]'
    );
    if (e.target.checked === false) {
      //
      switchingElement.disabled = true;
      disableFilter(parentElement, true);
    } else {
      switchingElement.disabled = false;
      disableFilter(parentElement, false);
    }
  };

  const disableFilter = (target, disable) => {
    if (disable) {
      target.classList.add('filter-disabled');
      target.classList.remove('filter-active');
    } else {
      target.classList.add('filter-active');
      target.classList.remove('filter-disabled');
    }
  };

  return (
    <div className='filters' style={FiltersStyle}>
      <label
        className='filter location-filter filter-disabled'
        htmlFor='location'
      >
        <div className='filter-title'>
          <input
            type='checkbox'
            id='location'
            name='location'
            onChange={checkboxChange}
          />
          <span className='checkmark'></span>
          <div>Location</div>
        </div>
        <input
          disabled
          type='text'
          id='location-value'
          name='location-value'
          placeholder='Location...'
        />
      </label>
      <label
        className='filter language-filter filter-disabled'
        htmlFor='language'
      >
        <div className='filter-title'>
          <input
            type='checkbox'
            id='language'
            name='language'
            onChange={checkboxChange}
          />
          <span className='checkmark'></span>
          <div>Language</div>
        </div>
        <select disabled name='language-value' id='language-value'>
          {/* values are hardcored cuz i didnt find github api to get all possible options. i put some from the top of my head, doesnt really matter */}
          <option value='javascript'>Javascript</option>
          <option value='html'>HTML</option>
          <option value='java'>Java</option>
          <option value='ruby'>Ruby</option>
          <option value='c#'>C#</option>
          <option value='php'>PHP</option>
          <option value='go'>GO</option>
        </select>
      </label>
      <label className='filter repos-filter filter-disabled' htmlFor='repos'>
        <div className='filter-title'>
          <input
            type='checkbox'
            id='repos'
            name='repos'
            onChange={checkboxChange}
          />
          <span className='checkmark'></span>
          <div> Repositories</div>
        </div>
        <span className='repos-count'>0</span>
        <input
          className='repos-input'
          disabled
          type='range'
          name='repos-value'
          id='repos-value'
          min='0'
          max='1000'
        />
      </label>
    </div>
  );
};

const FiltersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '3rem',
  marginBottom: '0.4rem'
};

export default Filters;
