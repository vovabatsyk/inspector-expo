import { StyleSheet, SafeAreaView, TouchableHighlight, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import { AppNavigation } from '../navigation/AppNavigation'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setPassword } from '../redux/actions'
import { clearData } from '../utils/userStorage'
import { user } from '../data'

export const AppScreen = ({ navigation }) => {
  const { name, password } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const logout = () => {
    clearData(navigation)
    dispatch(setName(''))
    dispatch(setPassword(''))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 70,
          padding: SIZES.paddingLarge,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray,
        }}
      >
        <Text style={{ color: '#fff' }}>{user.fullName}</Text>
        <TouchableHighlight style={styles.buttonExit} onPress={logout}>
          <Text style={{ color: '#fff' }}>Вийти</Text>
        </TouchableHighlight>
      </View>
      <AppNavigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  buttonExit: {
    width: 70,
    backgroundColor: COLORS.red,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    padding: 7,
  },
})
