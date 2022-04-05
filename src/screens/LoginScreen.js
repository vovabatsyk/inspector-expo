import {
	TextInput,
	Text,
	SafeAreaView,
	StyleSheet,
	View,
	TouchableHighlight,
	Image,
	ToastAndroid
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setPassword } from '../redux/actions'
import { COLORS, SIZES } from '../constants/theme'
import Icon from '@expo/vector-icons/FontAwesome5'
import { customUser, getData, storeData } from '../utils/userStorage'
import { screen } from '../constants/screens'

export const LoginScreen = ({ navigation }) => {
	const { name, password } = useSelector(state => state.userReducer)
	const dispatch = useDispatch()

	const isUser = () => {
		if (
			name === customUser.name &&
			password === customUser.password
		) {
			storeData('user')
			navigation.navigate(screen.APP_SCREEN)
		} else {
			ToastAndroid.show(
				'Не правельний логін або пароль',
				ToastAndroid.SHORT
			)
		}
		dispatch(setName(''))
		dispatch(setPassword(''))
	}

	useEffect(() => {
		getData(navigation)
	}, [])
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('../../assets/logo.png')}
				style={{
					width: SIZES.width / 4,
					height: SIZES.height / 5,
					marginBottom: 30
				}}
			/>
			<View style={styles.inputWrapper}>
				<Icon name='user' size={30} color={COLORS.secondary} />
				<TextInput
					style={styles.input}
					placeholder='логін'
					value={name}
					placeholderTextColor={COLORS.secondary}
					onChangeText={e => dispatch(setName(e))}
				/>
			</View>
			<View style={styles.inputWrapper}>
				<Icon name='user-secret' size={30} color={COLORS.secondary} />

				<TextInput
					style={styles.input}
					placeholder='пароль'
					placeholderTextColor={COLORS.secondary}
					secureTextEntry
					value={password}
					onChangeText={e => dispatch(setPassword(e))}
				/>
			</View>
			<View style={styles.buttonWrapper}>
				<TouchableHighlight
					style={styles.button}
					onPress={() => isUser()}
				>
					<Text style={styles.buttonText}>Вхід</Text>
				</TouchableHighlight>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  text: {
    color: COLORS.white,
    margin: 5,
    fontSize: SIZES.h2,
  },
  input: {
    height: 40,
    width: '85%',
    margin: 5,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 15,
    color: COLORS.white,
    padding: 5,
    textAlign: 'center',
    textDecorationLine: 'none',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
  },
  button: {
    backgroundColor: COLORS.primary,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    borderColor: COLORS.secondary,
    borderWidth: 1,
  },
  buttonWrapper: {
    width: '70%',
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.secondary,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
})
