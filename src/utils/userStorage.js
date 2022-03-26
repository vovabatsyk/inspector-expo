import AsyncStorage from '@react-native-async-storage/async-storage'
import { screen } from '../constants/screens'

export const customUser = {
  name: 'admin',
  password: 'admin',
}

export const getData = async (navigation) => {
  try {
    const value = await AsyncStorage.getItem('user')
    if (value !== null) {
      navigation.navigate(screen.APP_SCREEN)
    }
  } catch (e) {
    alert(e)
  }
}

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('user', value)
  } catch (e) {
    alert(e)
  }
}

export const clearData = async (navigation) => {
  try {
    await AsyncStorage.clear()
    navigation.navigate(screen.LOGIN_SCREEN)
  } catch (e) {
    alert(e)
  }
}
