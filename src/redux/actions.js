export const SET_NAME = 'SET_NAME'
export const SET_FULL_NAME = 'FULL_NAME'
export const SET_PASSWORD = 'SET_PASSWORD'

//  ДНЗ авто
export const SET_CAR_NUMBER = 'SET_CAR_NUMBER'
//  стаття порушення
export const SET_VIOLATION_ARTICLE = 'SET_VIOLATION_ARTICLE'
//  адрес порушення
export const SET_VIOLATION_ADDRESS = 'SET_VIOLATION_ADDRESS'
//  марка авто
export const SET_CAR_MARK = 'SET_CAR_MARK'
//  модель авто
export const SET_CAR_MODEL = 'SET_CAR_MODEL'
//  фабула
export const SET_VIOLATION_NAME = 'SET_VIOLATION_NAME'
// uri images
export const SET_IMAGES = 'SET_IMAGES'
export const DELETE_IMAGE = 'DELETE_IMAGE'

// пристрій фотофіксації
export const PHOTO_DEVICE = 'PHOTO_DEVICE'

export const RIA_API_KEY = 'NU48ngwqFJQ94heGK2ooLcwPZRLNWgRydZ5lVZ1Q'
export const MARKS_URI = `https://developers.ria.com/auto/categories/1/marks?api_key=${RIA_API_KEY}`

export const setName = name => dispatch => {
	dispatch({
		type: SET_NAME,
		payload: name
	})
}

export const setFullName = fullName => dispatch => {
	dispatch({
		type: SET_FULL_NAME,
		payload: fullName
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

export const setCarModel = carModel => dispatch => {
	dispatch({
		type: SET_CAR_MODEL,
		payload: carModel
	})
}

export const setViolationAddress = violationAddress => dispatch => {
	dispatch({
		type: SET_VIOLATION_ADDRESS,
		payload: violationAddress
	})
}

export const setViolationName = violationName => dispatch => {
	dispatch({
		type: SET_VIOLATION_NAME,
		payload: violationName
	})
}

export const setImages = imagesUri => dispatch => {
	dispatch({
		type: SET_IMAGES,
		payload: imagesUri
	})
}

export const deleteImages = imageUri => dispatch => {
	dispatch({
		type: DELETE_IMAGE,
		payload: imageUri
	})
}

export const setPhotoDevice = photoDevice => dispatch => {
	dispatch({
		type: PHOTO_DEVICE,
		payload: photoDevice
	})
}

