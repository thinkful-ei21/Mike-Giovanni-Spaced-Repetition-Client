import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const FETCH_CARD_REQUEST = 'FETCH_CARD_REQUEST';
export const fetchCardRequest = () => ({
    type: FETCH_CARD_REQUEST
});

export const FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS';
export const fetchCardSuccess = data => ({
    type: FETCH_CARD_SUCCESS,
    data
});

export const FETCH_CARD_ERROR = 'FETCH_CARD_ERROR';
export const fetchCardError = error => ({
    type: FETCH_CARD_ERROR,
    error
});

export const fetchCard = () => (dispatch, getState) => {
const state = getState();

  dispatch(fetchCardRequest())
  fetch(`${API_BASE_URL}/cards`, {
    method: 'GET',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${state.auth.authToken}`
    }
})
    // .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(fetchCardSuccess(data)))
    .catch(err => {
        dispatch(fetchCardError(err));
    });
};
