// action types
const API_CALL_REQUEST = "API_CALL_REQUEST"; // We’re beginning the process of fetching a dog from the Dog API
const API_CALL_SUCCESS = "API_CALL_SUCCESS"; // We successfully retrieved a dog and are therefore no longer in the process of fetching one.
const API_CALL_FAILURE = "API_CALL_FAILURE"; // Something went wrong with our API call

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function reducer(state = initialState, action) {
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