import { Text, StyleSheet, ScrollView, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export const CreateScreen = () => {
  return (
    <ScrollView style={styles.backgroundColor}>
      <View style={styles.container}>
        <Text style={{ color: '#fff' }}>App</Text>
        <TextInput placeholder='sdgdsgdsg' style={{ backgroundColor: '#fff' }} />
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
