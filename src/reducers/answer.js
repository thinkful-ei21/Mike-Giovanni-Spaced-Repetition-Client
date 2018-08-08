import {
  SEND_ANSWER_REQUEST,
  SEND_ANSWER_SUCCESS,
  SEND_ANSWER_ERROR,
  // RECEIVE_ANSWER_REQUEST,
  // RECEIVE_ANSWER_SUCCESS,
  // RECEIVE_ANSWER_ERROR

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

    // case RECEIVE_ANSWER_REQUEST:
    // return {
    //   ...state,
    //   card: '',
    //   loading: true
    // };

    // case RECEIVE_ANSWER_SUCCESS:
    // return {
    //   ...state,
    //   card: action.data,
    //   loading: false,
    //   error: null
    // }

    // case RECEIVE_ANSWER_ERROR:
    // return {
    //   ...state,
    //   loading: false,
    //   error: 'There was an error fetching answer'
    // }

    default:
    return state;
  }

}