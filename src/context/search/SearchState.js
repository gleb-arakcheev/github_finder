import React, { useReducer } from 'react';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import { GET_FILTERS, SET_LOCATION, SET_LANGUAGE, SET_REPOS } from '../types';

const SearchState = props => {
  const initialState = {
    location: {
      value: null,
      isEnabled: false
    },
    language: null,
    repos: null
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  // Set location
  const setLocation = location => {
    dispatch({
      type: SET_LOCATION,
      payload: location
    });
  };
  // Set Language
  const setLanguage = language => {
    dispatch({
      type: SET_LANGUAGE,
      payload: language
    });
  };
  // Set repos
  const setRepos = repos => {
    dispatch({
      type: SET_REPOS,
      payload: repos
    });
  };

  const getFilters = () => {
    return state;
  };

  // Set alert
  // const setAlert = (message, type) => {
  //   dispatch({
  //     type: SET_ALERT,
  //     payload: { message, type }
  //   });

  //   setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  // };

  return (
    <SearchContext.Provider
      value={{
        location: state.location,
        language: state.language,
        repos: state.repos,
        setLocation,
        setLanguage,
        setRepos,
        getFilters
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
