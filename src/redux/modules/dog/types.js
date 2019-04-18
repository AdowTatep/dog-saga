// We’re beginning the process of fetching a dog from the Dog API
const API_CALL_REQUEST = 'Dog/API_CALL_REQUEST';

// We successfully retrieved a dog and are therefore no longer in the process of fetching one.
const API_CALL_SUCCESS = 'Dog/API_CALL_SUCCESS';

// Something went wrong with our API call
const API_CALL_FAILURE = 'Dog/API_CALL_FAILURE';

export { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE };
