import React from 'react'
import 'react-native-gesture-handler'
import { LoginNavigation } from './src/navigation/LoginNavigation'
import { Provider } from 'react-redux'
import { Store } from './src/redux/store'

function App() {
  return (
    <Provider store={Store}>
      <LoginNavigation />
    </Provider>
  )
}

export default App
