import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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

// export const RECEIVE_ANSWER_REQUEST = 'RECEIVE_ANSWER_REQUEST';
// export const receiveAnswerRequest = () => ({
//   type: RECEIVE_ANSWER_REQUEST
// });

// export const RECEIVE_ANSWER_SUCCESS = 'RECEIVE_ANSWER_SUCCESS';
// export const receiveAnswerSuccess = data => ({
//   type: RECEIVE_ANSWER_SUCCESS,
//   data
// });

// export const RECEIVE_ANSWER_ERROR = 'RECEIVE_ANSWER_ERROR';
// export const receiveAnswerError = error => ({
//   type: RECEIVE_ANSWER_ERROR,
//   error
// });

export const sendAnswer = answer => (dispatch, getState) => {
  const state = getState();

  console.log('sending answer ', answer, state)

  dispatch(sendAnswerRequest(answer))
  fetch(`${API_BASE_URL}/answer`, {
    method: 'POST',
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

  // .then(() => {
  //   dispatch(receiveAnswerRequest())
  //   fetch(`${API_BASE_URL}/answer/:${id}`, {
  //     method: 'GET',
  //     headers: {
  //         Authorization: `Bearer ${state.auth.authToken}`
  //     }
  //   })
  //   .then(res => normalizeResponseErrors(res))
  //   .then(res => res.json())
  //   .then((data) => {
  //       dispatch(receiveAnswerSuccess(data))
  //   })
  //   .catch(err => {
  //       dispatch(receiveAnswerError(err));
  //   });
  // })

};
