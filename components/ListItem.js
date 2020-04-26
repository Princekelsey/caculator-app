import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.itemView}>
        <Text style={styles.item}>{item.input}</Text>
        <Text style={styles.item}>{item.result}</Text>
        <Text style={styles.del}>X</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
  },
  del: {
    color: 'red',
  },
});

export default ListItem;
