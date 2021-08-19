import React from 'react';
import {View} from 'react-native';

import StartAnimation from '../Animation/StartAnimation';
class Start extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <StartAnimation />
      </View>
    );
  }
}
export default Start;
