import { Text, StyleSheet, ScrollView, TextInput, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants/theme'
import { ButtonPDF } from '../components/ButtonPDF'
import { ModalPickerViolationArticle } from '../components/modals/ModalPickerViolationArticle'
import { ViolationPrice } from '../components/ViolationPrice'
import { VehicleInfo } from '../components/VehicleInfo'
import { ViolationName } from '../components/ViolationName'
import { ViolationAddress } from '../components/ViolationAddress'
import { ViolationArticle } from '../components/ViolationArticle'
import { ViolationImages } from '../components/ViolationImages'

export const CreateScreen = () => {
	return (
		<ScrollView style={styles.backgroundColor}>
			<View style={styles.containerSize}>
				<ViolationArticle />

				<VehicleInfo />

				<View style={styles.delimiter}></View>

				<ViolationName />

				<View style={styles.delimiter}></View>

				<ViolationAddress />

				<View style={styles.delimiter}></View>

				<ViolationImages />

				<View style={styles.delimiter}></View>

				<ButtonPDF />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	backgroundColor: {
		backgroundColor: COLORS.black
	},
	containerSize: {
		marginTop: SIZES.marginLarge,
		padding: SIZES.paddingLarge,
		height: SIZES.height * 2
	},

	delimiter: {
		height: 2,
		backgroundColor: COLORS.gray,
		marginTop: SIZES.marginLarge + 10
	},
	text: {
		color: COLORS.white,

		marginTop: SIZES.marginLarge
	},
	input: {
		borderColor: COLORS.gray,
		borderWidth: 1,
		padding: SIZES.padding,
		marginTop: SIZES.margin,
		borderRadius: SIZES.radius,
		color: COLORS.white
	}
})
