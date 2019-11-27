import React, { useContext } from 'react';
import SearchContext from '../../context/search/searchContext';
import FilterTitle from './filterTitle';

const FilterLocation = () => {
  const searchContext = useContext(SearchContext);
  const location = searchContext.getLocation();

  const locationOnChange = e => {
    // setFilters({ ...filters, location: e.target.value });
    searchContext.setLocation(e.target.value);
  };

  return (
    <label
      className='filter location-filter filter-disabled'
      filter='location'
      htmlFor='location'
    >
      <FilterTitle name={'location'} />
      <input
        type='text'
        id='location-value'
        name='location-value'
        placeholder='Location...'
        onChange={locationOnChange}
        // disabled
        value={location.value}
      />
    </label>
  );
};

export default FilterLocation;
