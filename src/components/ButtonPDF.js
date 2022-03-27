import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing'
import { COLORS, SIZES } from '../constants/theme'

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`

export const ButtonPDF = () => {
  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    })
  }

  const printToFile = async () => {
    const { uri } = await Print.printToFileAsync({
      html,
    })
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' })
  }

  return (
    <TouchableHighlight style={styles.button} onPress={printToFile}>
      <Text style={styles.text}>Створити</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: SIZES.padding,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    marginTop: SIZES.marginLarge,
  },
  text: {
    fontSize: SIZES.h3,
    color: COLORS.white,
  },
})
