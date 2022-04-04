export const SET_NAME = 'SET_NAME'
export const SET_PASSWORD = 'SET_PASSWORD'

//  ДНЗ авто
export const SET_CAR_NUMBER = 'SET_CAR_NUMBER'
//  стаття порушення
export const SET_VIOLATION_ARTICLE = 'SET_VIOLATION_ARTICLE'
//  адрес порушення
export const SET_VIOLATION_ADDRESS = 'SET_VIOLATION_ADDRESS'

export const SET_CAR_MARK = 'SET_CAR_MARK'

const RIA_API_KEY = 'NU48ngwqFJQ94heGK2ooLcwPZRLNWgRydZ5lVZ1Q'
export const MARKS_URI = `https://developers.ria.com/auto/categories/1/marks?api_key=${RIA_API_KEY}`

export const setName = name => dispatch => {
	dispatch({
		type: SET_NAME,
		payload: name
	})
}

export const setPassword = password => dispatch => {
	dispatch({
		type: SET_PASSWORD,
		payload: password
	})
}

export const setCarNumber = carNumber => dispatch => {
	dispatch({
		type: SET_CAR_NUMBER,
		payload: carNumber
	})
}

export const setViolationArticle = violationArticle => dispatch => {
	dispatch({
		type: SET_VIOLATION_ARTICLE,
		payload: violationArticle
	})
}

export const setCarMark = carMark => dispatch => {
	dispatch({
		type: SET_CAR_MARK,
		payload: carMark
	})
}

export const setViolationAddress = (violationAddress) => (dispatch) => {
  dispatch({
    type: SET_VIOLATION_ADDRESS,
    payload: violationAddress,
  })
}
