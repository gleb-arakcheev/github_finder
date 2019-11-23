import React, { useState, useContext } from 'react';
import SearchContext from '../../context/search/searchContext';

const Filters = () => {
  // const initialState = {
  //   location: null,
  //   language: null,
  //   repos: null
  // };

  const searchContext = useContext(SearchContext);

  // const [filters, setFilters] = useState(initialState);

  const checkboxChange = e => {
    const parentElement = e.target.parentElement.parentElement;
    const switchingElement = parentElement.querySelector(
      'input[type=text], select, input[type=range]'
    );
    if (e.target.checked === false) {
      //
      switchingElement.disabled = true;
      disableFilter(parentElement, true);
      stateFilterDisable(parentElement, true);
    } else {
      switchingElement.disabled = false;
      disableFilter(parentElement, false);
      stateFilterDisable(parentElement, false, switchingElement);
    }
  };

  // switching filter on/off true == filter off, false == filter on
  const disableFilter = (target, disable) => {
    if (disable) {
      target.classList.add('filter-disabled');
      target.classList.remove('filter-active');
    } else {
      target.classList.add('filter-active');
      target.classList.remove('filter-disabled');
    }
  };

  const stateFilterDisable = (target, disable, input = null) => {
    if (disable) {
      switch (target.getAttribute('filter')) {
        case 'location':
          searchContext.setLocation(null);
          break;
        case 'language':
          searchContext.setLanguage(null);
          break;
        case 'repos':
          searchContext.setRepos(null);
          break;
        default:
          break;
      }
    } else {
      switch (target.getAttribute('filter')) {
        case 'location':
          searchContext.setLocation(input.value);
          break;
        case 'language':
          searchContext.setLanguage(input.value);
          break;
        case 'repos':
          searchContext.setRepos(input.value);
          break;
        default:
          break;
      }
    }
  };

  const reposOnChange = e => {
    // console.log();
    e.target.parentElement.querySelector('.repos-count').innerText =
      e.target.value;

    // setFilters({ ...filters, repos: e.target.value });
    searchContext.setRepos(e.target.value);
  };

  const locationOnChange = e => {
    // setFilters({ ...filters, location: e.target.value });
    searchContext.setLocation(e.target.value);
  };

  const languageOnChange = e => {
    // setFilters({ ...filters, language: e.target.value });
    searchContext.setLanguage(e.target.value);
  };

  return (
    <div className='filters' style={FiltersStyle}>
      <label
        className='filter location-filter filter-disabled'
        filter='location'
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
          onChange={locationOnChange}
        />
      </label>
      <label
        className='filter language-filter filter-disabled'
        filter='language'
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
        <select
          disabled
          name='language-value'
          id='language-value'
          onChange={languageOnChange}
        >
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
      <label
        className='filter repos-filter filter-disabled'
        htmlFor='repos'
        filter='repos'
      >
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
          onChange={reposOnChange}
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
