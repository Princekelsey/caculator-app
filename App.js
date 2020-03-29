import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Inputs from './components/Inputs';

const App = () => {
  const [caluculatorState, setState] = useState({
    displayValue: '',
    operator: null,
    result: 0,
  });

  const inputButtons = [
    ['CLEAR', 'DEL'],
    [7, 8, 9, '÷'],
    [4, 5, 6, '×'],
    [1, 2, 3, '-'],
    [0, '.', '=', '+'],
  ];

  const {displayValue, operator, result} = caluculatorState;

  const calculateInput = () => {
    const input = displayValue;

    const calculated = eval(input);

    setState({
      ...caluculatorState,
      result: calculated % 1 === 0 ? calculated : calculated.toFixed(2),
    });
  };

  const handlePress = value => {
    switch (value) {
      case 'DEL':
        if (displayValue === '') return;
        const text = displayValue.split('');
        text.pop();
        setState({
          ...caluculatorState,
          displayValue: text.join(''),
        });
        break;
      case '+':
      case '×':
      case '-':
      case '÷':
        const lastChar = displayValue.split('').pop();
        if (
          displayValue === '' ||
          (operator === value && operator === lastChar) ||
          lastChar === '+' ||
          lastChar === '*' ||
          lastChar === '-' ||
          lastChar === '/'
        )
          return;
        let ope;
        if (value === '÷') {
          ope = '/';
        } else if (value === '×') {
          ope = '*';
        } else {
          ope = value;
        }
        setState({
          ...caluculatorState,
          nextValue: true,
          operator: value,
          displayValue: displayValue + ope,
        });
        break;
      case '=':
        const last = displayValue.split('').pop();
        if (
          displayValue === '' ||
          last === '+' ||
          last === '×' ||
          last === '-' ||
          last === '÷'
        )
          return;
        calculateInput();
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0:
        setState({
          ...caluculatorState,
          displayValue: displayValue + value,
        });

        break;

      case '.':
        const dot = displayValue.toString().slice(-1);

        setState({
          ...caluculatorState,
          displayValue: dot !== '.' ? displayValue + value : displayValue,
        });

        break;
      default:
        setState({
          displayValue: '',
          result: 0,
          operator: null,
        });
        break;
    }
  };

  const renderInputButtons = () => {
    const layout = inputButtons.map((button, i) => {
      const btnRow = button.map((item, i) => (
        <Inputs value={item} key={item} handlePress={handlePress} />
      ));
      return (
        <View style={styles.btnRow} key={i}>
          {btnRow}
        </View>
      );
    });
    return layout;
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.input}>{displayValue}</Text>
      </View>
      <View style={styles.caululationContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>{renderInputButtons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
  },

  caululationContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
  },
  result: {
    fontSize: 60,
    fontWeight: 'bold',
    paddingRight: 10,
    textAlign: 'right',
  },

  inputContainer: {
    flex: 8,
    backgroundColor: '#3d0075',
  },
  input: {
    color: 'black',
    fontSize: 30,
    paddingTop: 20,
    paddingRight: 10,
    textAlign: 'right',
    // fontWeight: 'lighter',
  },
  btnRow: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default App;
