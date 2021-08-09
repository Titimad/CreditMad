/*
import React from 'react';
import {StyleSheet, View, TextInput, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import backup from '../Helpers/backupData';
import BackupItem from './BackupItem';

const mapStateToProps = state => {
  return state;
};

class Record extends React.Component {
  constructor(props) {
    super(props);
    this._loadBackup = this._loadBackup.bind(this);
    this.amount = 0;
    this.term = 0;
    this.interestRate = 0;
    this.monthlyPayment = 0;
    this.totalPayments = 0;
    this.totalInterest = 0;
  }
  componentDidMount() {
    console.log('Le component Record est monté');
  }
  componentDidUpdate() {
    console.log('Le component Record a été mis à jour');
  }
  _loadBackup(backUpSended) {
    console.log('Fonction _loadBackup appelée');
    console.log(this.props);
    console.log('Contenu de backUpSended:');
    console.log(backUpSended);
    //appeler reducer loadBackup

    const action = {
      type: 'UPDATE_PARAMETERS_SIMULATION',
      value: backUpSended,
    };
    this.props.dispatch(action);
    console.log('action UPDATE_PARAMETERS_SIMULATION a été appelée');

    this.props.navigation.jumpTo('Mensualité');
  }

  render() {
    console.log('Props de Record début de Render:');
    console.log(this.props);

    return (
      <View style={styles.container}>
        <FlatList
          data={backup}
          keyExtractor={item => item.Type.toString()}
          renderItem={({item}) => (
            <BackupItem backUp={item} loadBackup={this._loadBackup} />
          )}
        />
      </View>
    );
    console.log('Props de Record après Render:');
    console.log(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    height: 260,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  inputBox: {
    flex: 3,
    backgroundColor: 'white',
    marginTop: 0,
    flexDirection: 'row',
  },
  resultBox: {
    flex: 1,
    color: 'black',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Helvetica',
    marginLeft: 10,
  },
  textResult: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Helvetica',
    marginLeft: 10,
  },
  input: {
    color: 'black',
    fontSize: 20,
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
export default connect(mapStateToProps)(Record);
*/
