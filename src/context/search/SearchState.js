import React, { useReducer } from 'react';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import {
  // ENABLE_FILTER_LANGUAGE,
  // ENABLE_FILTER_LOCATION,
  // ENABLE_FILTER_REPOS,
  // DISABLE_FILTER_LANGUAGE,
  // DISABLE_FILTER_LOCATION,
  // DISABLE_FILTER_REPOS,
  CHANGE_CHECK_FILTER_LOCATION,
  CHANGE_CHECK_FILTER_LANGUAGE,
  CHANGE_CHECK_FILTER_REPOS,
  SET_FILTER_LOCATION,
  SET_FILTER_LANGUAGE,
  SET_FILTER_REPOS
} from '../types';

const SearchState = props => {
  const initialState = {
    location: {
      value: '',
      isEnabled: true
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

  //change checked value on cehckbox
  //location
  const changeCheckLocation = () => {
    dispatch({
      type: CHANGE_CHECK_FILTER_LOCATION
    });
    return state.location.isEnabled;
  };

  //language
  const changeCheckLanguage = () => {
    dispatch({
      type: CHANGE_CHECK_FILTER_LANGUAGE
    });
    return state.language.isEnabled;
  };
  //repos
  const changeCheckRepos = () => {
    dispatch({
      type: CHANGE_CHECK_FILTER_REPOS
    });
    return state.repos.isEnabled;
  };

  // //Enable location
  // const enableLocation = () => {
  //   dispatch({
  //     type: ENABLE_FILTER_LOCATION
  //   });
  // };
  // //Enable language
  // const enableLanguage = () => {
  //   dispatch({
  //     type: ENABLE_FILTER_LANGUAGE
  //   });
  // };
  // //Enable repos
  // const enableRepos = () => {
  //   dispatch({
  //     type: ENABLE_FILTER_REPOS
  //   });
  // };

  // //Disable location
  // const disableLocation = () => {
  //   dispatch({
  //     type: DISABLE_FILTER_LOCATION
  //   });
  // };

  // //Disable language
  // const disableLanguage = () => {
  //   dispatch({
  //     type: DISABLE_FILTER_LANGUAGE
  //   });
  // };

  // //Disable repos
  // const disableRepos = () => {
  //   dispatch({
  //     type: DISABLE_FILTER_REPOS
  //   });
  // };

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
        changeCheckLocation,
        changeCheckLanguage,
        changeCheckRepos,
        // enableLocation,
        // enableLanguage,
        // enableRepos,
        // disableLocation,
        // disableLanguage,
        // disableRepos,
        setLocation,
        setLanguage,
        setRepos,
        getLocation,
        getLanguage,
        getRepos,
        getFilters
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
