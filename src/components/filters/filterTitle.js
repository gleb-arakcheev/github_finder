import React, { useContext } from 'react';
import SearchContext from '../../context/search/searchContext';

const FilterTitle = ({ name, isChecked }) => {
  const searchContext = useContext(SearchContext);

  const lowercaseName = name.toLowerCase();
  const uppercaseName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  // const isChecked = lowercaseName => {
  //   switch (lowercaseName) {
  //     case 'location':
  //       console.log('language' + searchContext.getLocation().isEnabled);
  //       return searchContext.getLocation().isEnabled;
  //     // return false;
  //     case 'language':
  //       console.log('language' + searchContext.getLanguage().isEnabled);
  //       return searchContext.getLanguage().isEnabled;
  //     // return false;
  //     case 'repositories':
  //       console.log('language' + searchContext.getRepos().isEnabled);
  //       return searchContext.getRepos().isEnabled;
  //     // return false;
  //     default:
  //       return false;
  //   }
  // };

  const checkboxChange = e => {
    switch (e.target.id) {
      case 'location':
        searchContext.changeCheckLocation();
        break;
      case 'language':
        searchContext.changeCheckLanguage();
        break;
      case 'repositories':
        searchContext.changeCheckRepos();
        break;
      default:
        break;
    }
  };

  return (
    <div className='filter-title'>
      <input
        type='checkbox'
        id={lowercaseName}
        defaultChecked={isChecked}
        name={lowercaseName}
        onChange={checkboxChange}
      />
      <span className='checkmark'></span>
      <div>{uppercaseName}</div>
    </div>
  );
};

export default FilterTitle;
