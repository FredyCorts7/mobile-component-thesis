import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Dashboard} from './src/containers/Dashboard';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {/* <AppStack.Screen
          name="Login"
          component={Login}
          options={{header: () => <></>}}
        /> */}
        <AppStack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerBackImage: () => <></>,
            title: 'Menú Principal',
            headerStyle: styles.stackAppHeader,
            headerTitleStyle: styles.stackAppHeaderTitle,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  stackAppHeader: {
    backgroundColor: '#3c3c3c',
  },
  stackAppHeaderTitle: {
    color: '#fff',
  },
});

export default App;
