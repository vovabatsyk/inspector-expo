import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'

export const Loader = () => {
	return (
		<View style={[styles.container, styles.horizontal]}>
			<ActivityIndicator size='large' color={COLORS.secondary} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: COLORS.black
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10
	}
})
