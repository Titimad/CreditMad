import React from 'react';

import LottieView from 'lottie-react-native';

export default class StartAnimation extends React.Component {
  render() {
    return <LottieView source={require('./money.json')} autoPlay loop />;
  }
}
