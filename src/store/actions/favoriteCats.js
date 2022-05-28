import { SET_FAVORITE_CATS } from '../../utils/constants'

export function setFavoriteCats(data) {
  return (dispatch) => {
    return dispatch({type: SET_FAVORITE_CATS, payload: data})
  }
}