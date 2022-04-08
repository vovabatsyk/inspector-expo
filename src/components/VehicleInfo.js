import { View, StyleSheet, Modal } from 'react-native'
import { Text, TextInput } from '../constants/styles'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	setCarNumber,
	setCarMark,
	setCarModel
} from '../redux/actions'
import { COLORS, SIZES } from '../constants/theme'
import { ModalPickerCarMark } from './modals/ModalPickerCarMark'
import { ButtonAction } from './ui/ButtonAction'

export const VehicleInfo = () => {
	const { carNumber, carMark, carModel } = useSelector(
		state => state.violationReducer
	)

	const dispatch = useDispatch()

	const [isModalVisible, setIsModalVisible] = useState(false)

	const changeModalVisibility = bool => {
		setIsModalVisible(bool)
	}

	return (
		<View style={styles.container}>
			<View style={{ width: SIZES.width - SIZES.paddingLarge }}>
				<Text>Державний номерний знак</Text>
				<TextInput
					placeholderTextColor={COLORS.gray}
					placeholder='Державний номерний знак'
					style={styles.input}
					value={carNumber}
					onChangeText={value => dispatch(setCarNumber(value))}
				/>
			</View>
			<View
				style={{
					width: SIZES.width - SIZES.paddingLarge,
					flexDirection: 'row',
					alignItems: 'flex-end'
				}}
			>
				<View style={styles.inputWith}>
					<Text>Марка</Text>
					<TextInput
						placeholderTextColor={COLORS.gray}
						placeholder='Марка'
						style={styles.input}
						value={carMark.name}
						onChangeText={value =>
							dispatch(setCarMark({ name: value }))
						}
					/>
				</View>
				<View style={styles.buttonWith}>
					<ButtonAction
						changeModalVisibility={changeModalVisibility}
					/>
					<Modal
						transparent={true}
						animationType='fade'
						visible={isModalVisible}
						nRequestClose={() => changeModalVisibility(false)}
					>
						<ModalPickerCarMark
							changeModalVisibility={changeModalVisibility}
						/>
					</Modal>
				</View>
			</View>

			<View
				style={{
					width: SIZES.width - SIZES.paddingLarge,
					flexDirection: 'row',
					alignItems: 'flex-end'
				}}
			>
				<View style={styles.inputWith}>
					<Text>Модель</Text>
					<TextInput
						placeholderTextColor={COLORS.gray}
						placeholder='Модель'
						style={styles.input}
						value={carModel}
						onChangeText={value => dispatch(setCarModel(value))}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	input: {
		borderColor: COLORS.gray,
		borderWidth: 1,
		padding: SIZES.padding,
		marginTop: SIZES.margin,
		borderRadius: SIZES.radius
	},
	inputWith: {
		width: '85%'
	},
	button: {
		backgroundColor: COLORS.gray,
		alignItems: 'center',
		borderRadius: SIZES.radius,
		justifyContent: 'center',
		height: SIZES.icon,
		marginLeft: SIZES.margin
	},
	buttonWith: {
		width: '15%'
	},
	buttonText: {
		color: COLORS.white,
		fontSize: SIZES.h2
	}
})
