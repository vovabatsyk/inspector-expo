import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
// import styled from 'styled-components/native'
import { COLORS, SIZES } from '../constants/theme'
import { ButtonPDF } from '../components/ui/ButtonPDF'
import { VehicleInfo } from '../components/VehicleInfo'
import { ViolationName } from '../components/ViolationName'
import { ViolationAddress } from '../components/ViolationAddress'
import { ViolationArticle } from '../components/ViolationArticle'
import { ViolationImages } from '../components/ViolationImages'
import { ButtonSave } from '../components/ui/ButtonSave'
import { Container } from '../constants/styles'

export const CreateScreen = props => {
	return (
		<Container>
			<View style={styles.containerSize}>
				<ViolationArticle />

				<VehicleInfo />

				<View style={styles.delimiter}></View>

				<ViolationName />

				<View style={styles.delimiter}></View>

				<ViolationAddress />

				<View style={styles.delimiter}></View>

				<ViolationImages />

				<View style={styles.delimiter}></View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}
				>
					<ButtonPDF
						size={800}
						text={'Зберегти PDF'}
						color={COLORS.gray}
					/>
					<ButtonPDF
						size={1600}
						text={'Роздрукувати'}
						color={COLORS.red}
					/>
				</View>

				<ButtonSave />
			</View>
		</Container>
	)
}

const styles = StyleSheet.create({
	backgroundColor: {
		backgroundColor: COLORS.black
	},
	containerSize: {
		marginTop: 0,
		padding: SIZES.paddingLarge,
		height: SIZES.height * 1.8
	},

	delimiter: {
		height: 2,
		backgroundColor: COLORS.gray,
		marginTop: SIZES.marginLarge + 10
	}
})
