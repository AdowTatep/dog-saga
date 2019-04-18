import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from './types';

// Action creators
const dogRequest = () => ({ type: API_CALL_REQUEST });

const dogSuccess = dog => ({ type: API_CALL_SUCCESS, dog });

const dogFailure = error => ({ type: API_CALL_FAILURE, error });

export { dogRequest, dogSuccess, dogFailure };
