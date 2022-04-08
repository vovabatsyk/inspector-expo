import {
	StyleSheet,
	TouchableHighlight,
	View,
	ToastAndroid
} from 'react-native'
import { Text } from '../constants/styles'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import { useSelector, useDispatch } from 'react-redux'
import {
	setName,
	setPassword,
	setCarMark,
	setCarModel,
	setCarNumber,
	setViolationAddress,
	setViolationArticle,
	setViolationName
} from '../redux/actions'
import { clearData } from '../utils/userStorage'

export const Header = ({ navigation }) => {
	const { fullName } = useSelector(state => state.userReducer)

	const dispatch = useDispatch()

	const logout = () => {
		clearData(navigation)
		dispatch(setName('admin'))
		dispatch(setPassword('admin'))
		dispatch(setViolationArticle({ title: '', price: 0 }))
		dispatch(setCarNumber(''))
		dispatch(
			setCarMark({
				name: '',
				value: 1
			})
		)
		dispatch(setCarModel(''))
		dispatch(setViolationName(''))
		dispatch(setViolationAddress(''))
		ToastAndroid.show('Ви вийшли з програми', ToastAndroid.SHORT)
	}
	return (
		<View style={styles.container}>
			<Text style={{ marginTop: 0 }}>{fullName}</Text>
			<TouchableHighlight style={styles.buttonExit} onPress={logout}>
				<Text style={{ color: COLORS.white, marginTop: 0 }}>
					Вийти
				</Text>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 35,
		padding: SIZES.paddingLarge,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.gray
	},
	buttonExit: {
		width: 70,
		backgroundColor: COLORS.red,
		alignItems: 'center',
		borderRadius: SIZES.radius,
		padding: 7
	}
})
