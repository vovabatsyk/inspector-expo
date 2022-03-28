import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  TouchableHighlight,
  Modal,
} from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants/theme'
import { ButtonPDF } from '../components/ButtonPDF'
import { ModalPickerViolationArticle } from '../components/ModalPickerViolationArticle'

export const CreateScreen = () => {
  const [selectedViolationArticle, setSelectedViolationArticle] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }

  const setViolationArticle = (data) => {
    setSelectedViolationArticle(data.title)
  }

  return (
    <ScrollView style={styles.backgroundColor}>
      <View style={styles.containerSize}>
        <View>
          <Text style={styles.text}>Оберіть статтю із списку:</Text>
          <TouchableHighlight style={styles.input} onPress={() => changeModalVisibility(true)}>
            <Text style={{ color: COLORS.white }}>{selectedViolationArticle}</Text>
          </TouchableHighlight>
          <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            nRequestClose={() => changeModalVisibility(false)}
          >
            <ModalPickerViolationArticle
              changeModalVisibility={changeModalVisibility}
              setViolationArticle={setViolationArticle}
            />
          </Modal>
        </View>
        <View>
          <Text style={styles.text}>Державний номерний знак</Text>
          <TextInput
            placeholderTextColor={COLORS.gray}
            placeholder='Державний номерний знак'
            style={styles.input}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.inputWith}>
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
          <View style={styles.buttonWith}>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>==</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.delimiter}></View>
        <View style={styles.container}>
          <View style={styles.inputWith}>
            <Text style={styles.text}>Фабула</Text>
            <TextInput
              placeholderTextColor={COLORS.gray}
              placeholder='Фабула'
              style={styles.input}
            />
          </View>
          <View style={styles.buttonWith}>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>==</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.delimiter}></View>
        <View style={styles.container}>
          <View style={styles.inputWith}>
            <Text style={styles.text}>Адреса правопорушення</Text>
            <TextInput
              placeholderTextColor={COLORS.gray}
              placeholder='Адреса'
              style={styles.input}
            />
          </View>
          <View style={styles.buttonWith}>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>==</Text>
            </TouchableHighlight>
          </View>
        </View>
        <ButtonPDF />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: COLORS.black,
  },
  containerSize: {
    marginTop: SIZES.marginLarge,
    height: SIZES.height,
    padding: SIZES.paddingLarge,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
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
  },
  buttonWith: {
    width: '15%',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.h2,
  },
})
