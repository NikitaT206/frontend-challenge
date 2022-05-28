import { FETCH_CATS, SET_CATS, SET_LIMIT, SET_LOADER } from '../../utils/constants';

const defaultState = {
  cats: [],
  limitedCats: [],
  limit: parseInt(window.innerHeight / 60),
  loader: false
}

export const catsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_CATS:
      return {...state, cats: action.payload}
    case SET_CATS:
      return {...state, limitedCats: action.payload}
    case SET_LIMIT:
      return {...state, limit: state.limit + 10}
    case SET_LOADER:
      return {...state, loader: action.payload}
    default:
      return state
  }
}