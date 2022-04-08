import { View, StyleSheet, TextInput } from 'react-native'
import { Text } from '../constants/styles'
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
				<Text style={{ marginTop: 0 }}>До сплати {price} грн.</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: SIZES.paddingLarge,
		borderWidth: 2,
		borderRadius: SIZES.radius,
		marginTop: SIZES.margin,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
