import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MARKS_URI, setCarMark } from '../../redux/actions'
import { COLORS, SIZES } from '../../constants/theme'
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler'

export const ModalPickerCarMark = props => {
	const dispatch = useDispatch()

	const [marks, setMarks] = useState([
		{
			name: '',
			value: ''
		}
	])

	const searchItem = text => {
		try {
			axios.get(MARKS_URI).then(res => {
				const searchItem = res.data.filter(item =>
					item.name.toUpperCase().includes(text.toUpperCase())
				)
				setMarks(searchItem)
			})
		} catch (error) {
			alert(error)
		}
	}

	useEffect(() => {
		try {
			axios.get(MARKS_URI).then(res => {
				setMarks(res.data)
			})
		} catch (error) {
			alert(error)
		}
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<TextInput
					style={styles.input}
					onChangeText={value => searchItem(value)}
					placeholder='Пошук...'
					placeholderTextColor={COLORS.gray}
				/>
				<ScrollView>
					{marks &&
						marks.map((item, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => {
									dispatch(setCarMark(item))
									props.changeModalVisibility(false)
								}}
								style={styles.item}
							>
								<View>
									<Text style={styles.itemText}>{item.name}</Text>
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
	},
	input: {
		borderColor: COLORS.gray,
		borderWidth: 1,
		padding: SIZES.padding,
		margin: SIZES.margin,
		borderRadius: SIZES.radius,
		color: COLORS.white
	}
})
