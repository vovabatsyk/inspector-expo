import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export const StatisticsScreen = () => {
  return (
    <ScrollView style={styles.backgroundColor}>
      <View style={styles.container}>
        <Text style={{ color: '#fff' }}>В розробці...</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: COLORS.black,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.height,
  },
})
