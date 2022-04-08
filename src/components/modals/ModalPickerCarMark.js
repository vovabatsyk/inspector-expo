import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	ToastAndroid
} from 'react-native'
import {
	ViewContainerModal,
	ViewContainer
} from '../../constants/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MARKS_URI, setCarMark } from '../../redux/actions'
import { COLORS, SIZES } from '../../constants/theme'
import axios from 'axios'
import { InputSearch } from '../InputSearch'
import { Loader } from '../ui/Loader'

export const ModalPickerCarMark = props => {
	const dispatch = useDispatch()

	const [loading, setLoading] = useState(true)
	const [marks, setMarks] = useState([
		{
			name: '',
			value: ''
		}
	])

	const searchItem = text => {
		setLoading(true)
		try {
			axios.get(MARKS_URI).then(res => {
				const searchItem = res.data.filter(item =>
					item.name.toUpperCase().includes(text.toUpperCase())
				)
				setMarks(searchItem)
				setLoading(false)
			})
		} catch (error) {
			alert(error)
		}
	}

	useEffect(() => {
		try {
			axios.get(MARKS_URI).then(res => {
				setMarks(res.data)
				setLoading(false)
			})
		} catch (error) {
			alert(error)
		}
	}, [])

	return (
		<ViewContainer style={styles.container}>
			<ViewContainerModal style={styles.modal}>
				<InputSearch searchItem={searchItem} />
				{loading ? (
					<Loader />
				) : (
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
				)}

				<TouchableOpacity
					style={styles.buttonCancel}
					onPress={() => props.changeModalVisibility(false)}
				>
					<Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
						Скасувати
					</Text>
				</TouchableOpacity>
			</ViewContainerModal>
		</ViewContainer>
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
		borderRadius: SIZES.radius,
		width: SIZES.width,
		height: SIZES.height,
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
