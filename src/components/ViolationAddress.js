import { View, Text, TouchableHighlight, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export const ViolationAddress = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: SIZES.width - SIZES.paddingLarge,
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}
      >
        <View style={styles.inputWith}>
          <Text style={styles.text}>Адреса правопорушення</Text>
          <TextInput placeholderTextColor={COLORS.gray} placeholder='Адреса' style={styles.input} />
        </View>
        <View style={styles.buttonWith}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>==</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    color: COLORS.white,
    marginTop: SIZES.marginLarge,
  },
  input: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    padding: SIZES.padding,
    marginTop: SIZES.margin,
    borderRadius: SIZES.radius,
    color: COLORS.white,
  },
  inputWith: {
    width: '80%',
  },
  button: {
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    height: SIZES.icon,
    marginLeft: SIZES.margin,
  },
  buttonWith: {
    width: '15%',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.h2,
  },
})
