import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export const ViolationPrice = ({ price }) => {
	return (
		<View>
			<View
				style={{
					...styles.container,
					borderColor: price === 0 ? COLORS.red : COLORS.green
				}}
			>
				<Text style={{ color: COLORS.white }}>
					До сплати {price} грн.
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.black,
		padding: SIZES.paddingLarge,
		borderWidth: 2,
		borderRadius: SIZES.radius,
		marginTop: SIZES.margin,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
