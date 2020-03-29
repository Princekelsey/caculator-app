import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Inputs = ({value, handlePress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handlePress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffff',
    fontSize: 20,
  },
});

export default Inputs;
