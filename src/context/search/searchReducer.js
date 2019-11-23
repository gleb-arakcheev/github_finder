import { GET_FILTERS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FILTERS:
      return {
        ...state,
        filters: action.payload
      };
    default:
      return state;
  }
};
