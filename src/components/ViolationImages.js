import React, { useState, useEffect } from 'react'
import {
	Button,
	Image,
	View,
	Platform,
	Text,
	TouchableOpacity
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector, useDispatch } from 'react-redux'
import { setImages, deleteImages } from '../redux/actions'

import { COLORS, SIZES } from '../constants/theme'

export const ViolationImages = () => {
	const dispatch = useDispatch()
	const { imagesUri } = useSelector(state => state.violationReducer)

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			quality: 1
		})

		if (!result.cancelled) {
			dispatch(setImages(result.uri))
		}
	}
	return (
		<View>
			<TouchableOpacity
				onPress={pickImage}
				style={{
					alignItems: 'center',
					backgroundColor: COLORS.gray,
					padding: SIZES.paddingLarge,
					margin: SIZES.marginLarge,
					borderRadius: SIZES.radius
				}}
			>
				<Text style={{ color: COLORS.white }}>
					Загрузити фотографії
				</Text>
			</TouchableOpacity>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-around',
					flexWrap: 'wrap'
				}}
			>
				{imagesUri &&
					imagesUri.map((image, index) => (
						<View
							key={index}
							style={{
								borderColor: COLORS.gray,
								borderWidth: 1,
								borderRadius: SIZES.radius,
								margin: SIZES.margin,
								marginBottom: SIZES.marginLarge,
								alignItems: 'center',
								justifyContent: 'center',
								height: 100
							}}
						>
							<Text>
								<Image
									source={{ uri: image }}
									style={{ width: 100, height: 100 }}
								/>
							</Text>
							<TouchableOpacity
								onPress={() => dispatch(deleteImages(image))}
							>
								<Text>
									<MaterialCommunityIcons
										name='trash-can'
										color={COLORS.red}
										size={SIZES.iconSmall}
									/>
								</Text>
							</TouchableOpacity>
						</View>
					))}
			</View>
		</View>
	)
}
