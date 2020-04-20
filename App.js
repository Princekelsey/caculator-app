import React, {Component} from 'react';
import Screen from './components/Screen';
import {View, StyleSheet} from 'react-native';
import Keybord from './components/Keybord';

const Calculator = require('./logic');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      result: 0,
    };

    //initialize calculator
    this.calculator = new Calculator();
  }
  handleClick = (keyLog, math) => {
    this.calculator.keyClick(keyLog, math);
    this.setState({
      displayValue: this.calculator.mainDisplay(),
      result: this.calculator.calculatedResult(),
    });
  };
  render() {
    const {displayValue, result} = this.state;
    return (
      <View style={styles.conatiner}>
        <Screen result={result} log={displayValue} />
        <Keybord keyClick={this.handleClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#4b5568',
  },
});
