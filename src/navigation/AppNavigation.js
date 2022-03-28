import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { CreateScreen } from '../screens/CreateScreen'
import { StatisticsScreen } from '../screens/StatisticsScreen'
import { SettingsScreen } from '../screens/SettingsScreen'
import { COLORS, SIZES } from '../constants/theme'
import { View } from 'react-native'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: 'absolute', backgroundColor: COLORS.black },
        tabBarActiveBackgroundColor: COLORS.gray,
        tabBarActiveTintColor: COLORS.white,
      }}
    >
      <Tab.Screen
        name='Create'
        component={CreateScreen}
        options={{
          tabBarLabel: 'Створити',
          tabBarIcon: () => (
            <MaterialCommunityIcons name='plus' color={COLORS.secondary} size={SIZES.icon} />
          ),
        }}
      />
      <Tab.Screen
        name='Statistics'
        component={StatisticsScreen}
        options={{
          tabBarLabel: 'Статистика',
          tabBarIcon: () => (
            <MaterialCommunityIcons name='book-open' color={COLORS.secondary} size={SIZES.icon} />
          ),
        }}
      />

      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Настройки',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name='folder-settings'
              color={COLORS.secondary}
              size={SIZES.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export const AppNavigation = () => {
  return <Tabs></Tabs>
}
