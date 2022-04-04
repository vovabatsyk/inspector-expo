export const SET_NAME = 'SET_NAME'
export const SET_PASSWORD = 'SET_PASSWORD'

//  ДНЗ авто
export const SET_CAR_NUMBER = 'SET_CAR_NUMBER'
//  стаття порушення
export const SET_VIOLATION_ARTICLE = 'SET_VIOLATION_ARTICLE'
//  адрес порушення
export const SET_VIOLATION_ADDRESS = 'SET_VIOLATION_ADDRESS'

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

export const setCarNumber = (carNumber) => (dispatch) => {
  dispatch({
    type: SET_CAR_NUMBER,
    payload: carNumber,
  })
}

export const setViolationArticle = (violationArticle) => (dispatch) => {
  dispatch({
    type: SET_VIOLATION_ARTICLE,
    payload: violationArticle,
  })
}

export const setViolationAddress = (violationAddress) => (dispatch) => {
  dispatch({
    type: SET_VIOLATION_ADDRESS,
    payload: violationAddress,
  })
}
