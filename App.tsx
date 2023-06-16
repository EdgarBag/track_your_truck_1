import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import "./i18";
enableScreens();
// import './shim.js';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator/index';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
