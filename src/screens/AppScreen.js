import { View, Text, Button } from 'react-native'
import React from 'react'
import { clearData } from '../utils/userStorage'
import { screen } from '../constants/screens'

export const AppScreen = ({ navigation }) => {
  return (
    <View>
      <Text>CreateScreen</Text>
      <Button title='Login' onPress={() => navigation.navigate(screen.LOGIN_SCREEN)} />
      <Button title='Logout' onPress={() => clearData(navigation)} />
    </View>
  )
}
