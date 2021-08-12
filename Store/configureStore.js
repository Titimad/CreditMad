// Store/configureStore.js

import {createStore} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import record from './Reducers/backupReducer';
import updatedParametersSimulation from './Reducers/updateParametersSimulationsReducer';
import appReducer from './Reducers/rootReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default createStore(
  persistCombineReducers(rootPersistConfig, {
    record,
    updatedParametersSimulation,
    appReducer,
  }),
);
