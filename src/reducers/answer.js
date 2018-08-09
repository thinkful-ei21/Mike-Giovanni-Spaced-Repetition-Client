import {
  SEND_ANSWER_REQUEST,
  SEND_ANSWER_SUCCESS,
  SEND_ANSWER_ERROR,
  CLEAR_ANSWER
} from '../actions/answer';

const initialState = {
  answer: '',
  result: '',
  error: null
}


export function answerReducer(state=initialState, action) {
  switch(action.type) {
    case SEND_ANSWER_REQUEST:
    return {
      ...state,
      answer: '',
      loading: true
    };

    case SEND_ANSWER_SUCCESS:
    return {
      ...state,
      answer: action.data.answer,
      result: action.data.result,
      loading: false,
      error: null
    }

    case SEND_ANSWER_ERROR:
    return {
      ...state,
      loading: false,
      error: 'There was an error sending answer'
    }

    case CLEAR_ANSWER:
    return {
      answer: '',
      result: ''
    }

    default:
    return state;
  }

}