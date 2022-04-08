import {
	View,
	TouchableHighlight,
	Modal,
	StyleSheet
} from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ModalPickerViolationArticle } from './modals/ModalPickerViolationArticle'
import { ViolationPrice } from './ViolationPrice'
import { COLORS, SIZES } from '../constants/theme'
import { Text } from '../constants/styles'

export const ViolationArticle = () => {
	const { violationArticle } = useSelector(
		state => state.violationReducer
	)

	const [isModalVisible, setIsModalVisible] = useState(false)

	const changeModalVisibility = bool => {
		setIsModalVisible(bool)
	}

	return (
		<View>
			<Text>Оберіть статтю із списку:</Text>
			<TouchableHighlight
				style={styles.input}
				onPress={() => changeModalVisibility(true)}
			>
				<Text style={{ marginTop: 0 }}>{violationArticle.title}</Text>
			</TouchableHighlight>
			<Modal
				transparent={true}
				animationType='fade'
				visible={isModalVisible}
				nRequestClose={() => changeModalVisibility(false)}
			>
				<ModalPickerViolationArticle
					changeModalVisibility={changeModalVisibility}
				/>
			</Modal>
			<ViolationPrice price={violationArticle.price} />
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
		borderRadius: SIZES.radius,
		color: COLORS.white
	}
})
