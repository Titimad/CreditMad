import React from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import numeral from 'numeral';

import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

var interest = 0;
var amount = 0;

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

class MonthlyPayment extends React.Component {
  constructor(props) {
    super(props);
    this.amount = 0;
    this.term = 0;
    this.interestRate = 0;
    this.monthlyPayment = 0;
    this.totalPayments = 0;
    this.totalInterest = 0;
  }

  _calculate() {
    //Calcul seulement si la durée est saisie
    if (this.term != 0) {
      //Calcul différent si le taux d'intérêt est nul
      if (this.interestRate != 0) {
        this.monthlyPayment =
          (this.amount * this.interestRate) /
          12 /
          (1 - Math.pow(1 + this.interestRate / 12, -this.term));
        console.log('Mensualité: ' + this.monthlyPayment);
      } else {
        this.monthlyPayment = this.amount / this.term;
        console.log('Mensualité: ' + this.monthlyPayment);
      }

      this.totalPayments =
        Math.round(this.monthlyPayment * this.term * 100) / 100;
      this.totalInterest =
        Math.round((this.totalPayments - this.amount) * 100) / 100;
      this.monthlyPayment = Math.round(this.monthlyPayment * 100) / 100;
      interest = this.totalInterest;
      console.log('Var interest: ' + interest);
      amount = this.totalPayments;
      console.log('Var amount: ' + amount);
      this.forceUpdate();
    } else {
      this.monthlyPayment = 0;
      this.totalPayments = 0;
      this.totalInterest = 0;
      interest = this.totalInterest;
      console.log('Var interest: ' + interest);
      amount = this.totalPayments;
      console.log('Var amount: ' + amount);
      this.forceUpdate();
    }
  }
  _amountInputChanged(text) {
    //Remplacer la virgule par un point
    var index = text.indexOf(',');
    if (index !== -1) {
      text = text.replace(',', '.');
    }
    this.amount = text; // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    this._calculate();
    console.log('Amount: ' + text);
  }
  _termInputChanged(text) {
    //Remplacer la virgule par un point
    var index = text.indexOf(',');
    if (index !== -1) {
      text = text.replace(',', '.');
    }
    this.term = text; // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    this._calculate();
    console.log('Durée: ' + text);
  }
  _interestRateInputChanged(text) {
    //Remplacer la virgule par un point
    var index = text.indexOf(',');
    if (index !== -1) {
      text = text.replace(',', '.');
    }
    this.interestRate = text / 100; // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    this._calculate();
    console.log("Taux d'intérêt: " + text);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <View
            style={{
              backgroundColor: 'blanchedalmond',
              flex: 1,
              alignItems: 'stretch',
              justifyContent: 'space-around',
              fontSize: 20,
            }}>
            <Text style={styles.text}>Montant du prêt</Text>
            <Text style={styles.text}>Durée en mois</Text>
            <Text style={styles.text}>Taux d'intérêt</Text>
          </View>
          <View
            style={{
              backgroundColor: 'blanchedalmond',
              flex: 2,
              alignItems: 'stretch',
              justifyContent: 'space-around',
            }}>
            <View>
              <TextInput
                style={styles.input}
                keyboardType="decimal-pad"
                returnKeyType={'done'}
                placeholder=""
                onChangeText={text => this._amountInputChanged(text)}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                keyboardType="decimal-pad"
                returnKeyType={'done'}
                placeholder=""
                onChangeText={text => this._termInputChanged(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={[styles.input, {flex: 4}]}
                keyboardType="decimal-pad"
                returnKeyType={'done'}
                placeholder=""
                onChangeText={text => this._interestRateInputChanged(text)}
              />
              <Text style={{flex: 1, alignItems: 'flex-end'}}>%</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.resultBox,
            {
              backgroundColor: 'silver',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={styles.textResult}>Mensualité</Text>
          <Text style={styles.textResult}>
            {numeral(this.monthlyPayment).format('0.00')}
          </Text>
        </View>
        <View
          style={[
            styles.resultBox,
            {
              backgroundColor: 'gainsboro',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={styles.textResult}>Coût total</Text>
          <Text style={styles.textResult}>
            {numeral(this.totalPayments).format('0.00')}
          </Text>
        </View>

        <View
          style={[
            styles.resultBox,
            {
              backgroundColor: 'gainsboro',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={styles.textResult}>Total des intérets</Text>
          <Text style={styles.textResult}>
            {numeral(this.totalInterest).format('0.00')}
          </Text>
        </View>
        <View
          style={{
            flex: 4,
            paddingVertical: 0,
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
          }}>
          <PieChart
            data={[
              {
                name: 'Intérêts',
                value: interest,
                color: 'red',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
              {
                name: 'Capital',
                value: amount,
                color: 'green',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
            ]}
            width={screenWidth}
            height={260}
            chartConfig={chartConfig}
            accessor="value"
            backgroundColor="white"
            paddingLeft="15"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default MonthlyPayment;
