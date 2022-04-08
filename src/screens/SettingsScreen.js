import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	COLORS,
	darkTheme,
	lightTheme,
	SIZES
} from '../constants/theme'
import { setPhotoDevice, setFullName } from '../redux/actions'
import styled from 'styled-components/native'
import { switchTheme } from '../redux/theme/actions'

export const SettingsScreen = props => {
	const { photoDevice } = useSelector(state => state.violationReducer)
	const { fullName } = useSelector(state => state.userReducer)
	const { theme } = useSelector(state => state.themeReducer)

	const dispatch = useDispatch()

	return (
		<Container>
			{theme.mode === 'light' ? (
				<Button onPress={() => dispatch(switchTheme(darkTheme))}>
					<Text>Світла тема</Text>
				</Button>
			) : (
				<Button onPress={() => dispatch(switchTheme(lightTheme))}>
					<Text>Темна тема</Text>
				</Button>
			)}
			<Div>
				<Text
					style={{
						marginTop: SIZES.marginLarge
					}}
				>
					П.І.Б.
				</Text>
				<Input
					placeholderTextColor={COLORS.gray}
					value={fullName}
					onChangeText={value => dispatch(setFullName(value))}
				/>
			</Div>
			<Div>
				<Text
					style={{
						marginTop: SIZES.marginLarge
					}}
				>
					Пристрій фотофіксації
				</Text>
				<Input
					placeholderTextColor={COLORS.gray}
					value={photoDevice}
					onChangeText={value => dispatch(setPhotoDevice(value))}
				/>
			</Div>
		</Container>
	)
}

const Text = styled.Text`
	color: ${props => props.theme.TEXT_COLOR};
`

const Button = styled.TouchableOpacity`
	width: ${SIZES.width - SIZES.marginLarge}px;
	height: 40px;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.BUTTON_COLOR};
	border-radius: ${SIZES.radius}px;
	margin-top: ${SIZES.marginLarge}px;
	border-color: ${COLORS.red};
	border-width: 1px;
`

const Container = styled.View`
	flex: 1;
	align-items: center;

	background-color: ${props => props.theme.BACKGROUND_COLOR};
`

const Div = styled.View``

const Input = styled.TextInput`
	border-color: ${COLORS.gray};
	border-width: 1px;
	padding: ${SIZES.padding}px;
	margin-top: ${SIZES.margin}px;
	border-radius: ${SIZES.radius}px;
	color: ${props => props.theme.TEXT_COLOR};
	width: ${SIZES.width - SIZES.marginLarge}px;
	height: 50px;
`
