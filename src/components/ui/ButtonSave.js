import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { useSelector, useDispatch } from 'react-redux'
import {
	setCarMark,
	setCarModel,
	setCarNumber,
	setViolationAddress,
	setViolationArticle,
	setViolationName
} from '../../redux/actions'

export const ButtonSave = () => {
	const dispatch = useDispatch()

	return (
		<TouchableHighlight
			style={styles.button}
			onPress={() => {
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
			}}
		>
			<Text style={styles.text}>Зберегти</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	button: {
		padding: SIZES.padding,
		backgroundColor: COLORS.green,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: SIZES.radius,
		margin: SIZES.marginLarge,
		padding: SIZES.paddingLarge
	},
	text: {
		fontSize: SIZES.h3,
		color: COLORS.white
	}
})
