import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setViolationName } from '../../redux/actions'

import { COLORS, SIZES } from '../../constants/theme'
import { violation_name } from '../../data'
import { InputSearch } from '../InputSearch'

export const ModalPickerViolationName = props => {
	const dispatch = useDispatch()

	const [violationsName, setViolationsName] = useState([])

	useEffect(() => {
		setViolationsName(violation_name)
	}, [])

	const searchItem = text => {
		const searchItem = violation_name.filter(item =>
			item.title.toUpperCase().includes(text.toUpperCase())
		)
		setViolationsName(searchItem)
	}

	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<InputSearch searchItem={searchItem} />
				<ScrollView>
					{violationsName.map(item => (
						<TouchableOpacity
							key={item.id}
							onPress={() => {
								dispatch(setViolationName(item.description))
								props.changeModalVisibility(false)
							}}
							style={styles.item}
						>
							<View>
								<Text style={styles.itemText}>{item.title}</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
				<TouchableOpacity
					style={styles.buttonCancel}
					onPress={() => props.changeModalVisibility(false)}
				>
					<Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
						Скасувати
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute'
	},
	modal: {
		backgroundColor: COLORS.black,
		borderRadius: SIZES.radius,
		width: SIZES.width - SIZES.marginLarge,
		height: SIZES.height - SIZES.marginLarge,
		borderWidth: 2,
		borderColor: COLORS.secondary,
		paddingTop: SIZES.paddingLarge
	},
	item: {
		padding: SIZES.paddingLarge,
		margin: SIZES.margin,
		borderRadius: SIZES.radius,
		borderWidth: 1,
		borderColor: COLORS.secondary
	},
	itemText: {
		color: COLORS.white
	},
	buttonCancel: {
		backgroundColor: COLORS.red,
		borderBottomRightRadius: SIZES.radius,
		borderBottomLeftRadius: SIZES.radius,
		borderWidth: 1,
		borderColor: COLORS.secondary,
		padding: SIZES.paddingLarge,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
