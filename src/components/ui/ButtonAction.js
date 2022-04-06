import { Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'

export const ButtonAction = props => {
	return (
		<TouchableHighlight
			style={styles.button}
			onPress={() => props.changeModalVisibility(true)}
		>
			<Text style={styles.buttonText}>==</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.gray,
		alignItems: 'center',
		borderRadius: SIZES.radius,
		justifyContent: 'center',
		height: SIZES.icon,
		marginLeft: SIZES.margin
	},
	buttonText: {
		color: COLORS.white,
		fontSize: SIZES.h2
	}
})
