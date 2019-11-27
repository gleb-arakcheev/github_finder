import React, { useReducer } from 'react';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import {
  GET_FILTER_LOCATION,
  GET_FILTER_REPOS,
  GET_FILTER_LANGUAGE,
  SET_FILTER_LOCATION,
  SET_FILTER_LANGUAGE,
  SET_FILTER_REPOS
} from '../types';

const SearchState = props => {
  const initialState = {
    location: {
      value: '',
      isEnabled: false
    },
    language: {
      value: '',
      isEnabled: false
    },
    repos: {
      value: '',
      isEnabled: false
    }
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  // Set location
  const setLocation = location => {
    dispatch({
      type: SET_FILTER_LOCATION,
      payload: location
    });
  };
  // Set Language
  const setLanguage = language => {
    dispatch({
      type: SET_FILTER_LANGUAGE,
      payload: language
    });
  };
  // Set repos
  const setRepos = repos => {
    dispatch({
      type: SET_FILTER_REPOS,
      payload: repos
    });
  };

  const getLocation = () => {
    return state.location;
  };

  const getLanguage = () => {
    return state.language;
  };
  const getRepos = () => {
    return state.repos;
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
        getFilters,
        getLocation,
        getLanguage,
        getRepos
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
