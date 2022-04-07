import {
	NavigationContainer,
	DarkTheme
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { screen } from '../constants/screens'
import { AppScreen } from '../screens/AppScreen'
import { LoginScreen } from '../screens/LoginScreen'

const Stack = createStackNavigator()
export const LoginNavigation = () => {
	return (
		<NavigationContainer theme={DarkTheme}>
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
	)
}
