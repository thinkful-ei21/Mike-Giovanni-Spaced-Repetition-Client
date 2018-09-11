import {API_BASE_URL} from '../config';

export const SEND_ANSWER_REQUEST = 'SEND_ANSWER_REQUEST';
export const sendAnswerRequest = () => ({
  type: SEND_ANSWER_REQUEST
});

export const SEND_ANSWER_SUCCESS = 'SEND_ANSWER_SUCCESS';
export const sendAnswerSuccess = data => ({
  type: SEND_ANSWER_SUCCESS,
  data
});

export const SEND_ANSWER_ERROR = 'SEND_ANSWER_ERROR';
export const sendAnswerError = error => ({
  type: SEND_ANSWER_ERROR,
  error
});

export const CLEAR_ANSWER = 'CLEAR_ANSWER';
export const clearAnswer = () => ({
  type: CLEAR_ANSWER
});

export const sendAnswer = answer => (dispatch, getState) => {
  const state = getState();

  dispatch(sendAnswerRequest(answer))
  fetch(`${API_BASE_URL}/cards`, {
    method: 'PUT',
    headers: {
        Authorization: `Bearer ${state.auth.authToken}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      answer: answer
    })
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then((data) => {
      dispatch(sendAnswerSuccess(data))
  })
  .catch(err => {
      dispatch(sendAnswerError(err));
  })

};
