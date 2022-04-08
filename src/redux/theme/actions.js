export const THEME_SWITCH = 'THEME_SWITCH'

export const switchTheme = theme => dispatch => {
	dispatch({
		type: THEME_SWITCH,
		payload: theme
	})
}
