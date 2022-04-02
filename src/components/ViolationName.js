import { View, Text, StyleSheet, TouchableHighlight, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants/theme'
import { ModalPickerViolationName } from './modals/ModalPickerViolationName'

export const ViolationName = () => {
  const [selectedViolationName, setSelectedViolationName] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [violationData, setViolationData] = useState(null)

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }

  const setViolationName = (data) => {
    setSelectedViolationName(data.description)
    setViolationData(data)
  }
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
            value={selectedViolationName}
          />
        </View>
        <View style={styles.buttonWith}>
          <TouchableHighlight style={styles.button} onPress={() => changeModalVisibility(true)}>
            <Text style={styles.buttonText}>==</Text>
          </TouchableHighlight>
          <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            nRequestClose={() => changeModalVisibility(false)}
          >
            <ModalPickerViolationName
              changeModalVisibility={changeModalVisibility}
              setViolationName={setViolationName}
            />
          </Modal>
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
    maxHeight: 100,
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
