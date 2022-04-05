import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export const InputSearch = ({ searchItem }) => {
	return (
		<TextInput
			style={styles.input}
			onChangeText={value => searchItem(value)}
			placeholder='Пошук...'
			placeholderTextColor={COLORS.gray}
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		borderColor: COLORS.gray,
		borderWidth: 1,
		padding: SIZES.padding,
		margin: SIZES.margin,
		borderRadius: SIZES.radius,
		color: COLORS.white
	}
})
