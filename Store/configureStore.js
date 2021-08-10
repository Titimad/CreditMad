// Store/configureStore.js

import {createStore} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import record from './Reducers/backupReducer';
import updatedParametersSimulation from './Reducers/updateParametersSimulationsReducer';
import appReducer from './Reducers/rootReducer';

import AsyncStorage from '@react-native-community/async-storage';

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
