import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Screen from '../components/Screen';
import Keybord from '../components/Keybord';
export default class MainScreen extends Component {
  render() {
    const {result, log, keyClick, navigation} = this.props;
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.conatiner}>
          <Screen result={result} log={log} />
          <Keybord keyClick={keyClick} navigation={navigation} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#4b5568',
  },

  safeContainer: {flex: 1, backgroundColor: '#4b5568'},
});
