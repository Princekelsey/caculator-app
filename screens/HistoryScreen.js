import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import Fire from '../firebase';

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }
  setData = historyData => {
    this.setState({history: historyData});
  };

  componentDidMount() {
    // get calculated history from database
    Fire.getData(this.setData);
  }
  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={{justifyContent: 'center'}}>
          <View style={styles.itemView}>
            <Text style={styles.item}>Input</Text>
            <Text style={styles.item}>Result</Text>
            <Text style={styles.item} />
            {/* <Icon name="delete" /> */}
          </View>
          {this.state.history.length ? (
            <FlatList
              data={this.state.history}
              keyExtractor={item => item.input}
              renderItem={({item}) => <ListItem _key={item.id} item={item} />}
            />
          ) : null}
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

  safeContainer: {flex: 1},
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  item: {
    fontSize: 20,
  },
});
