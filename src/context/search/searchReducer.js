import {
  CHANGE_CHECK_FILTER_LOCATION,
  CHANGE_CHECK_FILTER_LANGUAGE,
  CHANGE_CHECK_FILTER_REPOS,
  ENABLE_FILTER_LANGUAGE,
  ENABLE_FILTER_LOCATION,
  ENABLE_FILTER_REPOS,
  DISABLE_FILTER_LANGUAGE,
  DISABLE_FILTER_LOCATION,
  DISABLE_FILTER_REPOS,
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
    case CHANGE_CHECK_FILTER_LOCATION:
      return {
        ...state,
        location: {
          value: state.location.value,
          isEnabled: !state.location.isEnabled
        }
      };
    case CHANGE_CHECK_FILTER_LANGUAGE:
      return {
        ...state,
        language: {
          value: state.language.value,
          isEnabled: !state.language.isEnabled
        }
      };
    case CHANGE_CHECK_FILTER_REPOS:
      return {
        ...state,
        repos: {
          value: state.repos.value,
          isEnabled: !state.repos.isEnabled
        }
      };
    // case DISABLE_FILTER_LOCATION:
    //   return {
    //     ...state,
    //     location: {
    //       isEnabled: false
    //     }
    //   };
    // case DISABLE_FILTER_LANGUAGE:
    //   return {
    //     ...state,
    //     language: {
    //       isEnabled: false
    //     }
    //   };
    // case DISABLE_FILTER_REPOS:
    //   return {
    //     ...state,
    //     repos: {
    //       isEnabled: false
    //     }
    //   };
    case SET_FILTER_LOCATION:
      return {
        ...state,
        location: {
          value: action.payload,
          isEnabled: state.location.isEnabled
        }
      };
    case SET_FILTER_LANGUAGE:
      return {
        ...state,
        language: {
          value: action.payload,
          isEnabled: state.language.isEnabled
        }
      };
    case SET_FILTER_REPOS:
      return {
        ...state,
        repos: {
          value: action.payload,
          isEnabled: state.repos.isEnabled
        }
      };
    default:
      return state;
  }
};
