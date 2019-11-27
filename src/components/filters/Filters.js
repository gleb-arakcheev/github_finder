import React, { useState, useContext, useEffect } from 'react';
import SearchContext from '../../context/search/searchContext';
import FilterLocation from './filterLocation';
import FilterLanguage from './filterLanguage';
import FilterRepositories from './filterRepositories';

const Filters = () => {
  const searchContext = useContext(SearchContext);
  const { location, language, repos } = searchContext.getFilters();

  const checkboxChange = e => {};

  const [check, setCheck] = useState(false);

  const myFunc = () => {
    console.log('changed' + !check);
    setCheck(!check);
  };

  return (
    <div className='filters'>
      <FilterLocation />
      <FilterLanguage />
      <FilterRepositories />
    </div>
  );
};

export default Filters;
