import { View, TouchableHighlight, StyleSheet } from 'react-native'
import { Text, TextInput } from '../constants/styles'
import * as Location from 'expo-location'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setViolationAddress } from '../redux/actions'
import { COLORS, SIZES } from '../constants/theme'

export const ViolationAddress = () => {
	const { violationAddress } = useSelector(
		state => state.violationReducer
	)

	const dispatch = useDispatch()

	const getLocation = async () => {
		try {
			let { status } =
				await Location.requestForegroundPermissionsAsync()
			if (status !== 'granted') {
				alert('Permission to access location was denied')
				return
			}

			let { coords } = await Location.getCurrentPositionAsync({
				enableHighAccuracy: true
			})

			if (coords) {
				const { latitude, longitude } = coords
				let response = await Location.reverseGeocodeAsync({
					latitude,
					longitude
				})

				for (let item of response) {
					let address = `${item.street}, ${item.name}`
					dispatch(setViolationAddress(address))
				}
			}
		} catch (error) {
			alert(error)
		}
	}
	return (
		<View style={styles.container}>
			<View
				style={{
					width: SIZES.width - SIZES.paddingLarge,
					flexDirection: 'row',
					alignItems: 'flex-end'
				}}
			>
				<View style={styles.inputWith}>
					<Text>Адреса правопорушення</Text>
					<TextInput
						placeholderTextColor={COLORS.gray}
						placeholder='Адреса'
						style={styles.input}
						value={violationAddress}
						onChangeText={value =>
							dispatch(setViolationAddress(value))
						}
					/>
				</View>
				<View style={styles.buttonWith}>
					<TouchableHighlight
						style={styles.button}
						onPress={getLocation}
					>
						<Text style={styles.buttonText}>==</Text>
					</TouchableHighlight>
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
		fontSize: SIZES.h2,
		marginTop: 0
	}
})
