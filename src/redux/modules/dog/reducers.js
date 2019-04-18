import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from './types';

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      // If successful, we dispatch API_CALL_SUCCESS along with the dog
      return { ...state, fetching: false, dog: action.dog };
    case API_CALL_FAILURE:
      // If a failure, we’ll dispatch API_CALL_FAILURE along with the error.
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}
