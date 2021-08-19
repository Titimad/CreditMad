import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';

import {SwipeListView} from 'react-native-swipe-list-view';

const mapStateToProps = state => {
  return state;
};

class Record extends React.Component {
  constructor(props) {
    super(props);
    this._loadBackup = this._loadBackup.bind(this);
    this._swipeList = this._swipeList.bind(this);
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
  _swipeList(listData, loadBackup) {
    const closeRow = (rowMap, rowKey) => {
      if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
      }
    };

    const deleteRow = (rowMap, rowKey) => {
      closeRow(rowMap, rowKey);
      const newData = [...listData];
      const prevIndex = listData.findIndex(item => item.key === rowKey);
      newData.splice(prevIndex, 1);
      listData = newData;
      const action = {
        type: 'DELETE_SIMULATION',
        value: listData,
      };
      this.props.dispatch(action);
      console.log('fonction deleteRow lue');
      console.log('action.value: ' + action.value);
    };

    const onRowDidOpen = rowKey => {
      console.log('This row opened', rowKey);
    };

    const renderItem = data => (
      <TouchableHighlight
        onPress={() =>
          loadBackup({
            Amount: data.item.Amount,
            Term: data.item.Term,
            InterestRate: data.item.InterestRate,
            MonthlyPayment: data.item.MonthlyPayment,
            TotalPayment: data.item.TotalPayment,
            TotalInterest: data.item.TotalInterest,
          })
        }
        style={styles.rowFront}
        underlayColor={'#AAA'}>
        <View>
          <Text>Simulation n°{data.item.key}</Text>
        </View>
      </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => closeRow(rowMap, data.item.key)}>
          <Text style={styles.backTextWhite}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => deleteRow(rowMap, data.item.key)}>
          <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={styles.container}>
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-150}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
        />
      </View>
    );
  }

  render() {
    /*    const listData = [
      {key: '0', text: 'item #0'},
      {key: '1', text: 'item #1'},
      {key: '2', text: 'item #2'},
      {key: '3', text: 'item #3'},
      {key: '4', text: 'item #4'},
      {key: '5', text: 'item #5'},
      {key: '6', text: 'item #6'},
    ];
    */
    console.log('Props de Record début de Render:');
    console.log(this.props);

    return (
      <View style={styles.container}>
        {this._swipeList(this.props.record.backupSimulation, this._loadBackup)}
      </View>
    );
    console.log('Props de Record après Render:');
    console.log(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});

export default connect(mapStateToProps)(Record);

/*
<FlatList
  data={this.props.record.backupSimulation}
  keyExtractor={item => item.Type.toString()}
  renderItem={({item}) => (
    <BackupItem
      backUp={item}
      loadBackup={this._loadBackup}
      index={item.Type}
    />
  )}
/>*/
