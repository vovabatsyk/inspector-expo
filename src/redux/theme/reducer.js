import { lightTheme } from '../../constants/theme'
import { THEME_SWITCH } from './actions'

const initialSate = {
	theme: lightTheme
}

export const themeReducer = (state = initialSate, action) => {
	switch (action.type) {
		case THEME_SWITCH:
			return { theme: action.payload }

		default:
			return state
	}
}
