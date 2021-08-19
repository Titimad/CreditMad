import React from 'react';

import {connect} from 'react-redux';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MonthlyPayment from '../Components/MonthlyPayment';
import InterestRate from '../Components/InterestRate';
import Term from '../Components/Term';
import Loan from '../Components/Loan';
import Record from '../Components/Record';
import Amount from '../Components/Amount';
import Basic from '../Components/SwipeList';

const mapStateToProps = state => {
  return state;
};

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Mensualité"
      screenOptions={{
        tabBarShowIcon: true,
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          color: 'white',
          fontSize: 12,
          fontWeight: 'bold',
          fontFamily: 'Helvetica',
        },
        tabBarItemStyle: {
          width: 120,
        },
        tabBarStyle: {
          backgroundColor: 'dodgerblue',
        },
        swipeEnabled: false,
      }}>
      <Tab.Screen
        name="Mensualité"
        component={MonthlyPayment}
        options={{
          tabBarLabel: 'Mensualité',
          tabBarIcon: tabInfo => (
            <AntDesign name="creditcard" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Taux d'intéret"
        component={InterestRate}
        options={{
          tabBarLabel: "Taux d'intéret",
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
        component={Basic}
        options={{
          tabBarLabel: 'Durée',
          tabBarIcon: tabInfo => (
            <AntDesign name="calendar" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Montant"
        component={Loan}
        options={{
          tabBarLabel: 'Montant',
          tabBarIcon: tabInfo => (
            <FontAwesome name="dollar" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Sauvegarde"
        component={Record}
        options={{
          tabBarLabel: 'Sauvegarde',
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
