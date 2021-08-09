// Components/FilmItem.js

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MonthlyPayment from './MonthlyPayment';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return state;
};

class BackupItem extends React.Component {
  render() {
    const backUp = this.props.backUp;
    const loadBackup = this.props.loadBackup;
    console.log('Props de BackupItem');
    console.log(this.props);
    return (
      <View style={styles.main_container}>
        <TouchableOpacity
          onPress={() =>
            loadBackup({
              Type: backUp.Type,
              Amount: backUp.Amount,
              Term: backUp.Term,
              InterestRate: backUp.InterestRate,
              MonthlyPayment: backUp.MonthlyPayment,
              TotalPayment: backUp.TotalPayment,
              TotalInterest: backUp.TotalInterest,
            })
          }>
          <Text style={styles.title_text}>{backUp.Type}</Text>
          <Text style={styles.title_text}>{backUp.Amount}</Text>
          <Text style={styles.title_text}>{backUp.Term}</Text>
          <Text style={styles.title_text}>{backUp.InterestRate}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 100,
  },
  title_text: {},
});

export default connect(mapStateToProps)(BackupItem);
