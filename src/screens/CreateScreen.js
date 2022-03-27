import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Button,
  TouchableHighlight,
} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import { data } from '../data'

export const CreateScreen = () => {
  return (
    <ScrollView style={styles.backgroundColor}>
      <View style={styles.container}>
        <View style={styles.div}>
          <View>
            <Text style={styles.text}>Оберіть статтю із списку:</Text>
            <TextInput
              placeholderTextColor={COLORS.gray}
              placeholder='Оберіть статтю із списку'
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.text}>Державний номерний знак</Text>
            <TextInput
              placeholderTextColor={COLORS.gray}
              placeholder='Державний номерний знак'
              style={styles.input}
            />
            <Text style={styles.text}>Марка</Text>
            <TextInput
              placeholderTextColor={COLORS.gray}
              placeholder='Марка'
              style={styles.input}
            />
            <Text style={styles.text}>Модель</Text>
            <TextInput
              placeholderTextColor={COLORS.gray}
              placeholder='Модель'
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.div}>
          <View>
            <Text style={styles.text}>Оберіть статтю із списку:</Text>
            <TextInput
              placeholderTextColor={COLORS.gray}
              placeholder='Оберіть статтю із списку'
              style={styles.input}
            />
          </View>
          <View style={styles.delimiter}></View>
          <View>
            <Text style={styles.text}>Фабула</Text>
            <TextInput
              placeholderTextColor={COLORS.gray}
              placeholder='Фабула'
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.div}>
          <View style={styles.delimiter}></View>
          <View>
            <Text style={styles.text}>Адреса правопорушення</Text>
            <TextInput
              placeholderTextColor={COLORS.gray}
              placeholder='Адреса'
              style={styles.input}
            />
          </View>
        </View>
        <TouchableHighlight style={styles.button} onPress={() => alert('Save')}>
          <Text style={{ color: COLORS.white }}>Зберегти</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: COLORS.black,
  },
  container: {
    marginTop: SIZES.marginLarge,
    height: SIZES.height,
    padding: SIZES.paddingLarge,
    marginBottom: SIZES.marginLarge + 50,
  },
  center: {
    alignItems: 'center',
  },
  header: {
    backgroundColor: COLORS.gray,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.marginLarge,
  },
  div: {
    // marginBottom: SIZES.marginLarge,
  },
  delimiter: {
    height: 2,
    backgroundColor: COLORS.gray,
    marginTop: SIZES.marginLarge + 10,
  },
  text: {
    color: COLORS.white,

    marginTop: SIZES.marginLarge,
  },
  input: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    padding: SIZES.padding,
    marginTop: SIZES.margin,
    borderRadius: SIZES.radius,
  },
  button: {
    width: 80,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.red,
    padding: SIZES.padding,
    marginTop: SIZES.marginLarge,
  },
})
