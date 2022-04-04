import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS, SIZES } from '../../constants/theme'
import { RIA_API_KEY, setCarModel } from '../../redux/actions'

export const ModalPickerCarModel = props => {
	const dispatch = useDispatch()
	const { carMark } = useSelector(state => state.violationReducer)

	const [models, setModels] = useState([])

	useEffect(() => {
		try {
			axios
				.get(
					`https://developers.ria.com/auto/categories/1/marks/${carMark.value}/models/_group?api_key=${RIA_API_KEY}`
				)
				.then(res => {
					setModels(res.data)
				})
		} catch (error) {
			alert(error)
		}
	}, [])
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<ScrollView>
					{models.map((item, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => {
								dispatch(setCarModel(item.name))
								props.changeModelModalVisibility(false)
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
					onPress={() => props.changeModelModalVisibility(false)}
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
		justifyContent: 'center'
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
