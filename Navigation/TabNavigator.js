import 'react-native-gesture-handler';
import React from 'react';

import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {MaterialIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import MainStackNavigator from './StackNavigator';

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
        showIcon: true,
        tabStyle: {width: 120},
        style: {
          backgroundColor: 'dodgerblue',
        },
      }}>
      <Tab.Screen
        name="Mensualité"
        component={MonthlyPayment}
        options={{
          title: 'Mensualité',
          tabBarIcon: tabInfo => (
            <AntDesign name="creditcard" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Taux d'intéret"
        component={InterestRate}
        options={{
          title: "Taux d'intéret",
          tabBarIcon: tabInfo => (
            <MaterialCommunityIcons
              name="shape-circle-plus"
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Durée"
        component={Term}
        options={{
          title: 'Durée',
          tabBarIcon: tabInfo => (
            <AntDesign name="calendar" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Montant"
        component={Loan}
        options={{
          title: 'Montant',
          tabBarIcon: tabInfo => (
            <FontAwesome name="dollar" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Sauvegarde"
        component={Record}
        options={{
          title: 'Sauvegarde',
          tabBarIcon: tabInfo => (
            <MaterialCommunityIcons
              name="record-circle-outline"
              size={24}
              color="white"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default connect(mapStateToProps)(TopTabNavigator);
