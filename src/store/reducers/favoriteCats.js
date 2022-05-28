import { SET_FAVORITE_CATS } from '../../utils/constants'

const defaultState = {
  favoriteCats: JSON.parse(localStorage.getItem('favoriteCats')) || [],
}

export const favoriteCatsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_FAVORITE_CATS:
      return {...state, favoriteCats: action.payload}
    default:
      return state
  }
}