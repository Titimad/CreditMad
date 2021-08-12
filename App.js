import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MainStackNavigator from './Navigation/StackNavigator';

import {Provider} from 'react-redux';
import Store from './Store/configureStore';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';

export default class App extends React.Component {
  render() {
    let persistor = persistStore(Store);
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
