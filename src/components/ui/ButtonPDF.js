import {
	Text,
	TouchableHighlight,
	StyleSheet,
	ToastAndroid
} from 'react-native'
import React from 'react'
import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing'
import { COLORS, SIZES } from '../../constants/theme'
import { useSelector, useDispatch } from 'react-redux'
import { violationHtml } from '../../data'
import {
	setCarMark,
	setCarModel,
	setCarNumber,
	setViolationAddress,
	setViolationArticle,
	setViolationName
} from '../../redux/actions'
import { getDateNow } from '../../utils/getDate'

export const ButtonPDF = ({ size, text, color }) => {
	const dispatch = useDispatch()

	const {
		carNumber,
		violationArticle,
		violationAddress,
		carMark,
		carModel,
		violationName,
		photoDevice
	} = useSelector(state => state.violationReducer)
	const { fullName } = useSelector(state => state.userReducer)

	const date = getDateNow()

	const html = violationHtml(
		date,
		'223042121',
		fullName,
		carMark.name,
		carModel,
		carNumber,
		violationAddress,
		violationName,
		violationArticle.title,
		violationArticle.price,
		photoDevice
	)

	const printToFile = async () => {
		const { uri } = await Print.printToFileAsync({
			html,
			margins: {
				left: 0,
				top: 0,
				right: 0,
				bottom: 0
			},

			height: size
		})
		await shareAsync(uri, {
			UTI: '.pdf',
			mimeType: 'application/pdf'
		})
	}

	return (
		<TouchableHighlight
			style={[{ ...styles.button, backgroundColor: color }]}
			onPress={() => {
				if (
					carNumber &&
					violationArticle.title &&
					violationAddress &&
					carMark &&
					violationName
				) {
					printToFile()
				} else {
					ToastAndroid.show('Заповніть всі поля', ToastAndroid.SHORT)
				}
			}}
		>
			<Text style={styles.text}>{text}</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	button: {
		padding: SIZES.padding,
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
