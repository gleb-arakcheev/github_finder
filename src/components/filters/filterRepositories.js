import React, { useContext } from 'react';
import SearchContext from '../../context/search/searchContext';
import FilterTitle from './filterTitle';

const FilterRepositories = () => {
  const searchContext = useContext(SearchContext);
  const repos = searchContext.getRepos();

  const reposOnChange = e => {
    const expRepos = Math.round(Math.exp(e.target.value / 10));
    searchContext.setRepos(expRepos);
  };

  return (
    <label
      className={`filter language-filter ${
        repos.isEnabled ? 'filter-active' : 'filter-disabled'
      }`}
      htmlFor='repositories'
      filter='repositories'
    >
      <FilterTitle name='repositories' isChecked={repos.isEnabled} />
      <span className='repos-count'>{repos.value}</span>
      <input
        className='repos-input'
        disabled={!repos.isEnabled}
        type='range'
        name='repos-value'
        id='repos-value'
        min='0'
        max='100'
        value={Math.round(Math.log(repos.value) * 10)}
        onChange={reposOnChange}
      />
    </label>
  );
};

export default FilterRepositories;
