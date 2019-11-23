import React, { useReducer } from 'react';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import { GET_FILTERS } from '../types';

const SearchState = props => {
  const initialState = {
    
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  // Set alert
  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <SearchContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default AlertState;
