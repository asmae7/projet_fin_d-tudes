/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from './Screen2';
import Screen1 from './Screen1';
import Screen5 from './screen5';
import ScanScreen from './Scanner';
import Screen4 from './Screen4';
import ScreenOK from './ScreenOk';
import { Provider } from 'react-redux';
import { Store } from './Storing';
import LoadingScreen from './LoadingScreen';
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Screen4"
          component={ScanScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Screen5"
          component={Screen5}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Screen6"
          component={Screen4}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="ScreenOk"
          component={ScreenOK}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
