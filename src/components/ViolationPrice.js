import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants/theme'

export const ViolationPrice = ({ violationData }) => {
  const [number, setNumber] = useState('')

  const onChangePrice = (price) => {
    const calcPrice = price * 20
    setNumber(calcPrice)
    console.log(calcPrice)
  }
  return (
    <View>
      {violationData.payParking ? (
        <View style={styles.container}>
          <Text style={{ color: COLORS.white }}>Введіти ціну години поркування</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(num) => onChangePrice(Number(num))}
          />
          <Text style={{ color: COLORS.white }}>До сплати {number} грн.</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={{ color: COLORS.white }}>До сплати {violationData.price} грн.</Text>
        </View>
      )}
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
  input: {
    backgroundColor: COLORS.gray,
    padding: SIZES.padding,
    margin: SIZES.margin,
    borderRadius: SIZES.radius,
    width: 100,
    textAlign: 'center',
    color: COLORS.white,
  },
})
