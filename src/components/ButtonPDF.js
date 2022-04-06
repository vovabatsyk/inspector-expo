import {
	Text,
	TouchableHighlight,
	StyleSheet,
	ToastAndroid
} from 'react-native'
import React from 'react'
import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing'
import { COLORS, SIZES } from '../constants/theme'
import { useSelector, useDispatch } from 'react-redux'
import { violationHtml } from '../data'
import {
	setCarMark,
	setCarModel,
	setCarNumber,
	setViolationAddress,
	setViolationArticle,
	setViolationName
} from '../redux/actions'

export const ButtonPDF = () => {
	const dispatch = useDispatch()

	const {
		carNumber,
		violationArticle,
		violationAddress,
		carMark,
		carModel,
		violationName
	} = useSelector(state => state.violationReducer)

	const html = violationHtml(
		'223042121',
		'Бацик Володимир Васильович',
		carMark.name,
		carModel,
		carNumber,
		'22.03.2021 12:21:122',
		violationAddress,
		violationName,
		violationArticle.title,
		violationArticle.price,
		'Samsung S10'
	)

	const printToFile = async () => {
		const { uri } = await Print.printToFileAsync({
			html,
			margins: {
				left: 0,
				top: 10,
				right: 0,
				bottom: 10
			},
			height: 1600
		})
		await shareAsync(uri, {
			UTI: '.pdf',
			mimeType: 'application/pdf'
		})
	}

	return (
		<TouchableHighlight
			style={styles.button}
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
			<Text style={styles.text}>Роздрукувати</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	button: {
		padding: SIZES.padding,
		backgroundColor: COLORS.red,
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
