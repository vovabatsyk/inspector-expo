import { View, Text, TextInput, StyleSheet, TouchableHighlight, Modal } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	setCarNumber,
	setCarMark,
	setCarModel
} from '../redux/actions'
import { COLORS, SIZES } from '../constants/theme'
import { ModalPickerCarMark } from './modals/ModalPickerCarMark'
import { ModalPickerCarModel } from './modals/ModalPickerCarModel'

export const VehicleInfo = () => {
	const { carName, carMark, carModel } = useSelector(
		state => state.violationReducer
	)
	const { name, password } = useSelector(state => state.userReducer)

	const dispatch = useDispatch()

	const [isModalVisible, setIsModalVisible] = useState(false)
	const [isModelModalVisible, setIsModelModalVisible] =
		useState(false)

	const changeModalVisibility = bool => {
		setIsModalVisible(bool)
	}

	const changeModelModalVisibility = bool => {
		setIsModelModalVisible(bool)
	}
	return (
		<View style={styles.container}>
			<View style={{ width: SIZES.width - SIZES.paddingLarge }}>
				<Text style={styles.text}>Державний номерний знак</Text>
				<TextInput
					placeholderTextColor={COLORS.gray}
					placeholder='Державний номерний знак'
					style={styles.input}
					value={carName}
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
					<Text style={styles.text}>Марка</Text>
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
					<TouchableHighlight
						style={styles.button}
						onPress={() => changeModalVisibility(true)}
					>
						<Text style={styles.buttonText}>==</Text>
					</TouchableHighlight>
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
					<Text style={styles.text}>Модель</Text>
					<TextInput
						placeholderTextColor={COLORS.gray}
						placeholder='Модель'
						style={styles.input}
						value={carModel}
						onChangeText={value => dispatch(setCarModel(value))}
					/>
				</View>
				<View style={styles.buttonWith}>
					<TouchableHighlight
						style={styles.button}
						onPress={() => changeModelModalVisibility(true)}
					>
						<Text style={styles.buttonText}>==</Text>
					</TouchableHighlight>
					<Modal
						transparent={true}
						animationType='fade'
						visible={isModelModalVisible}
						nRequestClose={() => changeModelModalVisibility(false)}
					>
						<ModalPickerCarModel
							changeModelModalVisibility={changeModelModalVisibility}
						/>
					</Modal>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    color: COLORS.white,
    marginTop: SIZES.marginLarge,
  },
  input: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    padding: SIZES.padding,
    marginTop: SIZES.margin,
    borderRadius: SIZES.radius,
    color: COLORS.white,
  },
  inputWith: {
    width: '80%',
  },
  button: {
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    height: SIZES.icon,
    marginLeft: SIZES.margin,
  },
  buttonWith: {
    width: '15%',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.h2,
  },
})
