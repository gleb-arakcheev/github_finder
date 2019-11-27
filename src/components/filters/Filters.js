import React, { useState, useContext, useEffect } from 'react';
import SearchContext from '../../context/search/searchContext';
import FilterTitle from './filterTitle';

const Filters = () => {
  const searchContext = useContext(SearchContext);
  const { location, language, repos } = searchContext.getFilters();

  const checkboxChange = e => {};

  const [check, setCheck] = useState(false);

  const myFunc = () => {
    console.log('changed' + !check);
    setCheck(!check);
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
    setCheck(!check);
  };

  return (
    <div className='filters'>
      <label
        className='filter location-filter filter-disabled'
        filter='location'
        htmlFor='location'
      >
        <FilterTitle name={'Location'} />
        <input
          type='text'
          id='location-value'
          name='location-value'
          placeholder='Location...'
          onChange={locationOnChange}
          disabled
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

export default Filters;
