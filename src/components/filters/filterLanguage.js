import React, { useContext } from 'react';
import SearchContext from '../../context/search/searchContext';
import FilterTitle from './filterTitle';

const FilterLanguage = () => {
  const searchContext = useContext(SearchContext);
  const language = searchContext.getLanguage();

  const languageOnChange = e => {
    // setFilters({ ...filters, language: e.target.value });
    searchContext.setLanguage(e.target.value);
  };

  return (
    <label
      className={`filter language-filter ${
        language.isEnabled ? 'filter-active' : 'filter-disabled'
      }`}
      filter='language'
      htmlFor='language'
    >
      <FilterTitle name={'language'} isChecked={language.isEnabled} />
      <select
        disabled={!language.isEnabled}
        name='language-value'
        id='language-value'
        onChange={languageOnChange}
        value={language.value}
      >
        {/* values are hardcored cuz i didnt find github api to get all possible options. i put some from the top of my head, doesnt really matter */}
        <option value='' hidden>
          Choose here
        </option>
        <option value='javascript'>Javascript</option>
        <option value='html'>HTML</option>
        <option value='java'>Java</option>
        <option value='ruby'>Ruby</option>
        <option value='c#'>C#</option>
        <option value='php'>PHP</option>
        <option value='go'>GO</option>
      </select>
    </label>
  );
};

export default FilterLanguage;
