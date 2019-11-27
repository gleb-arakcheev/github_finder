import React, { useContext } from 'react';
import SearchContext from '../../context/search/searchContext';
import FilterTitle from './filterTitle';

const FilterRepositories = () => {
  const searchContext = useContext(SearchContext);
  const repos = searchContext.getRepos();

  const reposOnChange = e => {
    // console.log();
    // e.target.parentElement.querySelector('.repos-count').innerText =
    //   e.target.value;
    // setFilters({ ...filters, repos: e.target.value });
    searchContext.setRepos(e.target.value);
  };

  return (
    <label
      className='filter repos-filter filter-disabled'
      htmlFor='repositories'
      filter='repositories'
    >
      <FilterTitle name='repositories' />
      <span className='repos-count'>{repos.value}</span>
      <input
        className='repos-input'
        // disabled
        type='range'
        name='repos-value'
        id='repos-value'
        min='0'
        max='1000'
        value={repos.value}
        onChange={reposOnChange}
      />
    </label>
  );
};

export default FilterRepositories;
