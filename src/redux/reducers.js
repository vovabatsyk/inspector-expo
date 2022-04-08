import {
	SET_NAME,
	SET_PASSWORD,
	SET_CAR_NUMBER,
	SET_VIOLATION_ARTICLE,
	SET_VIOLATION_ADDRESS,
	SET_CAR_MARK,
	SET_CAR_MODEL,
	SET_VIOLATION_NAME,
	SET_IMAGES,
	DELETE_IMAGE,
	PHOTO_DEVICE,
	SET_FULL_NAME
} from './actions'

const initialUserState = {
	name: 'admin',
	password: 'admin',
	fullName: "Прізвище Ім'я По-батькові"
}

const initialViolationState = {
	carNumber: '',
	violationArticle: {
		title: '',
		price: 0
	},
	violationAddress: '',
	carMark: {
		name: '',
		value: 1
	},
	carModel: '',
	violationName: '',
	imagesUri: [],
	photoDevice: 'Samsung S10'
}

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case SET_NAME:
			return { ...state, name: action.payload }

		case SET_FULL_NAME:
			return { ...state, fullName: action.payload }

		case SET_PASSWORD:
			return { ...state, password: action.payload }

		default:
			return state
	}
}

export const violationReducer = (
	state = initialViolationState,
	action
) => {
	switch (action.type) {
		case SET_CAR_NUMBER:
			return { ...state, carNumber: action.payload }

		case SET_VIOLATION_ARTICLE:
			return { ...state, violationArticle: action.payload }

		case SET_VIOLATION_ADDRESS:
			return { ...state, violationAddress: action.payload }

		case SET_CAR_MARK:
			return { ...state, carMark: action.payload }

		case SET_CAR_MODEL:
			return { ...state, carModel: action.payload }

		case SET_VIOLATION_NAME:
			return { ...state, violationName: action.payload }

		case SET_IMAGES:
			return {
				...state,
				imagesUri: [...state.imagesUri, action.payload]
			}

		case DELETE_IMAGE:
			return {
				...state,
				imagesUri: state.imagesUri.filter(i => i !== action.payload)
			}

		case PHOTO_DEVICE:
			return { ...state, photoDevice: action.payload }

		default:
			return state
	}
}
