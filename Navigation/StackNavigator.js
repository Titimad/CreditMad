/*
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TopTabNavigator from './TabNavigator';


import MonthlyPayment from '../Components/MonthlyPayment';
import InterestRate from '../Components/InterestRate';
import Term from '../Components/Term';
import Loan from '../Components/Loan';
import Record from '../Components/Record';

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

/* NE PLUS UTILISER / À EFFACER ?
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Mensualité"
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Mensualité" component={MonthlyPayment} />
      <Stack.Screen name="Taux d'intéret" component={InterestRate} />
      <Stack.Screen name="Durée" component={Term} />
      <Stack.Screen name="Montant" component={Loan} />
      <Stack.Screen name="Sauvegarde" component={Record} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
*/
