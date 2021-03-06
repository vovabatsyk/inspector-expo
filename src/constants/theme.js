import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const COLORS = {
	primary: '#0e1857',
	secondary: '#c2a213',

	blue: '#1a47b8',
	white: '#FCFCFC',
	black: '#000000',
	green: '#00590f',
	red: '#b81a2f',
	gray: '#6A6A6A',
	lightGray: '#dbdbdb',
	lightGray1: '#f5f6fa'
}
export const SIZES = {
	// global sizes
	base: 8,
	icon: 40,
	iconSmall: 30,
	font: 14,
	radius: 10,
	padding: 5,
	paddingLarge: 15,
	marginLarge: 15,
	margin: 5,

	// font sizes
	h1: 30,
	h2: 22,
	h3: 16,
	h4: 10,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	body5: 12,

	// app dimensions
	width,
	height
}
export const FONTS = {
  h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22 },
}

export const lightTheme = {
	mode: 'light',
	BACKGROUND_COLOR: COLORS.lightGray1,
	TEXT_COLOR: COLORS.black,
	BUTTON_COLOR: COLORS.lightGray,
	BACKGROUND_COLOR_NAV: COLORS.lightGray,
	BACKGROUND_COLOR_MODAL: COLORS.gray
}

export const darkTheme = {
	mode: 'dark',
	BACKGROUND_COLOR: COLORS.black,
	TEXT_COLOR: COLORS.lightGray,
	BUTTON_COLOR: COLORS.gray,
	BACKGROUND_COLOR_NAV: COLORS.black,
	BACKGROUND_COLOR_MODAL: COLORS.black
}
