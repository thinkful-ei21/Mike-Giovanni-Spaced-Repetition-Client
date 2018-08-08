import {
  FETCH_CARD_REQUEST,
  FETCH_CARD_SUCCESS,
  FETCH_CARD_ERROR
} from '../actions/cards';

const initialState = {
  card: '',
  error: null
}

export function cardReducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_CARD_REQUEST:
    return {
      ...state,
      card: '',
      loading: true
    };

    case FETCH_CARD_SUCCESS:
    return {
      ...state,
      card: action.data,
      loading: false,
      error: null
    }

    case FETCH_CARD_ERROR:
    return {
      ...state,
      loading: false,
      error: 'There was an error fetching card'
    }

    default:
    return state;
  }

};