import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { COLORS, SIZES } from '../constants/theme'
import { setPhotoDevice, setFullName } from '../redux/actions'

export const SettingsScreen = () => {
	const { photoDevice } = useSelector(state => state.violationReducer)
	const { fullName } = useSelector(state => state.userReducer)

	const dispatch = useDispatch()
	return (
		<View style={styles.container}>
			<View>
				<Text
					style={{
						color: COLORS.white,
						marginTop: SIZES.marginLarge
					}}
				>
					П.І.Б.
				</Text>
				<TextInput
					placeholderTextColor={COLORS.gray}
					style={styles.input}
					value={fullName}
					onChangeText={value => dispatch(setFullName(value))}
				/>
			</View>
			<View>
				<Text
					style={{
						color: COLORS.white,
						marginTop: SIZES.marginLarge
					}}
				>
					Пристрій фотофіксації
				</Text>
				<TextInput
					placeholderTextColor={COLORS.gray}
					style={styles.input}
					value={photoDevice}
					onChangeText={value => dispatch(setPhotoDevice(value))}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: COLORS.black
	},
	input: {
		borderColor: COLORS.gray,
		borderWidth: 1,
		padding: SIZES.padding,
		borderRadius: SIZES.radius,
		color: COLORS.white,
		width: SIZES.width - SIZES.marginLarge,
		height: 50
	}
})
