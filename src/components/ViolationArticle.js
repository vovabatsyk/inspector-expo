import { View, Text, TouchableHighlight, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ModalPickerViolationArticle } from './modals/ModalPickerViolationArticle'
import { ViolationPrice } from './ViolationPrice'
import { COLORS, SIZES } from '../constants/theme'

export const ViolationArticle = () => {
  const [selectedViolationArticle, setSelectedViolationArticle] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [violationData, setViolationData] = useState(null)

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }

  const setViolationArticle = (data) => {
    setSelectedViolationArticle(data.title)
    setViolationData(data)
  }

  return (
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
      {violationData ? <ViolationPrice violationData={violationData} /> : null}
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
})
