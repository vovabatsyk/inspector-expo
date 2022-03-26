import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { CreateScreen } from '../screens/CreateScreen'
import { StatisticsScreen } from '../screens/StatisticsScreen'
import { SettingsScreen } from '../screens/SettingsScreen'
import { COLORS } from '../constants/theme'
import { View } from 'react-native'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: 'absolute', backgroundColor: COLORS.primary },
        tabBarActiveBackgroundColor: COLORS.blue,
        tabBarActiveTintColor: COLORS.secondary,
      }}
    >
      <Tab.Screen
        name='Create'
        component={CreateScreen}
        options={{
          tabBarLabel: 'Створити',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name='plus' color={COLORS.secondary} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Statistics'
        component={StatisticsScreen}
        options={{
          tabBarLabel: 'Статистика',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name='book' color={COLORS.secondary} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Настройки',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name='folder-settings' color={COLORS.secondary} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export const AppNavigation = () => {
  return <Tabs></Tabs>
}
