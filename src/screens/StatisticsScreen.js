import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>В розробці StatisticsScreen...</Text>
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
