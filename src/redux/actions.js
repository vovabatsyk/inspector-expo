export const SET_NAME = 'SET_NAME'
export const SET_PASSWORD = 'SET_PASSWORD'

export const setName = (name) => (dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: name,
  })
}

export const setPassword = (password) => (dispatch) => {
  dispatch({
    type: SET_PASSWORD,
    payload: password,
  })
}
