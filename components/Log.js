import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Log extends Component {
  render() {
    return (
      <View style={styles.log}>
        <Text style={styles.text}>{this.props.log} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  log: {
    flex: 2,
    marginLeft: 10,
    paddingTop: 50,
    backgroundColor: '#b2c2b3',
    textAlign: 'left',
    width: 500,
  },
  text: {
    fontSize: 40,
    // fontFamily: 'Orbitron',
  },
});
