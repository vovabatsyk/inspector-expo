import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { clearData } from '../utils/userStorage'
import { COLORS } from '../constants/theme'

export const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
})
