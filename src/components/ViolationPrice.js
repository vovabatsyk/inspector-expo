import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export const ViolationPrice = ({ price }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={{ color: COLORS.white }}>До сплати {price} грн.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    padding: SIZES.paddingLarge,
    borderWidth: 2,
    borderColor: COLORS.red,
    borderRadius: SIZES.radius,
    marginTop: SIZES.margin,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
