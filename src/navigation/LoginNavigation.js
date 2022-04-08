import {
	NavigationContainer,
	DarkTheme
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { screen } from '../constants/screens'
import { AppScreen } from '../screens/AppScreen'
import { LoginScreen } from '../screens/LoginScreen'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

const Stack = createStackNavigator()

export const LoginNavigation = () => {
	const { theme } = useSelector(state => state.themeReducer)
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen
						name={screen.LOGIN_SCREEN}
						component={LoginScreen}
					/>
					<Stack.Screen
						name={screen.APP_SCREEN}
						component={AppScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	)
}
