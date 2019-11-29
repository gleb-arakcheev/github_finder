import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import SearchContext from '../../context/search/searchContext';

const Search = () => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);
  const searchContext = useContext(SearchContext);
  const history = useHistory();

  const [name, setName] = useState('');

  // composing search query
  const makeQuery = (name, filters) => {
    console.log(filters);
    let query = name;
    for (let filterName in filters) {
      if (filters[filterName].isEnabled && filters[filterName].value !== '') {
        if (filterName === 'repos') {
          query += `+${filterName}:>${filters[filterName].value}`;
        } else {
          query += `+${filterName}:${filters[filterName].value}`;
        }
      }
    }
    return query;
  };

  // redirecting to home page if we are not already there
  const redirectToHome = () => {
    history.push('/');
  };

  const onSubmit = e => {
    redirectToHome();
    const filters = searchContext.getFilters();
    e.preventDefault();
    if (name === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      const query = makeQuery(name, filters);
      githubContext.searchUsers(query);
    }
  };

  const onChange = e => setName(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <div className='search'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={name}
            onChange={onChange}
          />
          <button className='search-button'>
            <i className='fas fa-search'></i>
          </button>
        </div>
      </form>
      {/* {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )} */}
    </div>
  );
};

export default Search;
