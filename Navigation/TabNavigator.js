import 'react-native-gesture-handler';
import React from 'react';

import {connect} from 'react-redux';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
/*
import MaterialIcons from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons';
*/
import MonthlyPayment from '../Components/MonthlyPayment';
import InterestRate from '../Components/InterestRate';
import Term from '../Components/Term';
import Loan from '../Components/Loan';
import Record from '../Components/Record';
import Amount from '../Components/Amount';

const mapStateToProps = state => {
  return state;
};

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Mensualité"
      tabBarOptions={{
        labelStyle: {
          color: 'white',
          fontSize: 12,
          fontWeight: 'bold',
          fontFamily: 'Helvetica',
        },
        scrollEnabled: true,
        showIcon: false,
        tabStyle: {width: 120},
        style: {
          backgroundColor: 'dodgerblue',
        },
      }}>
      <Tab.Screen name="Mensualité" component={MonthlyPayment} />
      <Tab.Screen name="Taux d'intéret" component={InterestRate} />
      <Tab.Screen name="Durée" component={Term} />
      <Tab.Screen name="Montant" component={Loan} />
      <Tab.Screen name="Sauvegarde" component={Record} />
    </Tab.Navigator>
  );
};

export default connect(mapStateToProps)(TopTabNavigator);
