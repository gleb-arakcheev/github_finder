import { GET_FILTERS, SET_LOCATION, SET_LANGUAGE, SET_REPOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FILTERS:
      return {
        ...state,
        filters: action.payload
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    case SET_REPOS:
      return {
        ...state,
        repos: action.payload
      };
    default:
      return state;
  }
};
