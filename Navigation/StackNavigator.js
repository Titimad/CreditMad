import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TopTabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'dodgerblue',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreditMad"
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="CreditMad" component={TopTabNavigator} />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
