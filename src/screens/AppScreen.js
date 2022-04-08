import { StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import { AppNavigation } from '../navigation/AppNavigation'
import { HeaderContainer } from '../constants/styles'

import { Header } from '../components/Header'

export const AppScreen = ({ navigation }) => {
	return (
		<HeaderContainer style={styles.container}>
			<Header navigation={navigation} />
			<AppNavigation />
		</HeaderContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
