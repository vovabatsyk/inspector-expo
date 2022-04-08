import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { ViewContainerModal } from '../../constants/styles'

export const Loader = () => {
	return (
		<ViewContainerModal style={[styles.container, styles.horizontal]}>
			<ActivityIndicator size='large' color={COLORS.secondary} />
		</ViewContainerModal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10
	}
})
