import { getCats } from '../../utils/api';
import { FETCH_CATS, SET_CATS, SET_LIMIT, SET_LOADER } from '../../utils/constants';

export function fetchCats() {
  return async (dispatch) => {
    const data = await getCats().catch(err => Promise.reject(err))
    dispatch({ type: FETCH_CATS, payload: data })
  }
}

export function setCats(data) {
  return (dispatch) => {
    return dispatch({type: SET_CATS, payload: data})
  }
}

export function setLimit() {
  return (dispatch) => {
    return dispatch({type: SET_LIMIT})
  }
}

export function setLoader(state) {
  return (dispatch) => {
    return dispatch({type: SET_LOADER, payload: state})
  }
}