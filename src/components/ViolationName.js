import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export const ViolationName = () => {
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
          <Text style={styles.text}>Фабула</Text>
          <TextInput
            placeholderTextColor={COLORS.gray}
            placeholder='Фабула'
            style={styles.input}
            multiline={true}
            numberOfLines={3}
          />
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
