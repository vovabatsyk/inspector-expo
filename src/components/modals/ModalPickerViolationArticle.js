import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { violation_article } from '../../data'

export const ModalPickerViolationArticle = (props) => {
  const onPresItem = (data) => {
    props.setViolationArticle(data)
    props.changeModalVisibility(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <ScrollView>
          {violation_article.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => onPresItem(item)} style={styles.item}>
              <View>
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => props.changeModalVisibility(false)}
        >
          <Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>Скасувати</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radius,
    width: SIZES.width - SIZES.marginLarge,
    height: SIZES.height - SIZES.marginLarge,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    paddingTop: SIZES.paddingLarge,
  },
  item: {
    padding: SIZES.paddingLarge,
    margin: SIZES.margin,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  itemText: {
    color: COLORS.white,
  },
  buttonCancel: {
    backgroundColor: COLORS.red,
    borderBottomRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    padding: SIZES.paddingLarge,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
