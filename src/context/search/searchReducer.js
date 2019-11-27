import {
  GET_FILTER_LOCATION,
  GET_FILTER_REPOS,
  GET_FILTER_LANGUAGE,
  SET_FILTER_LOCATION,
  SET_FILTER_LANGUAGE,
  SET_FILTER_REPOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    // case GET_FILTER_LOCATION:
    //   return {
    //     ...state,
    //     location: action.payload
    //   };
    // case GET_FILTER_LANGUAGE:
    //   return {
    //     ...state,
    //     language: action.payload
    //   };
    // case GET_FILTER_REPOS:
    //   return {
    //     ...state,
    //     repos: action.payload
    //   };
    case SET_FILTER_LOCATION:
      return {
        ...state,
        location: {
          value: action.payload
        }
      };
    case SET_FILTER_LANGUAGE:
      return {
        ...state,
        language: {
          value: action.payload
        }
      };
    case SET_FILTER_REPOS:
      return {
        ...state,
        repos: {
          value: action.payload
        }
      };
    default:
      return state;
  }
};
