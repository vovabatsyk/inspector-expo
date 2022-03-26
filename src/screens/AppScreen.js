import { StyleSheet, SafeAreaView, TouchableHighlight, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import { AppNavigation } from '../navigation/AppNavigation'
import { screen } from '../constants/screens'
import { clearData } from '../utils/userStorage'

export const AppScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 70,
          paddingRight: 50,
        }}
      >
        <TouchableHighlight style={styles.buttonExit} onPress={() => clearData(navigation)}>
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
    height: SIZES.height + 40,
  },
  buttonExit: {
    width: 70,
    backgroundColor: COLORS.red,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    padding: 7,
  },
})
