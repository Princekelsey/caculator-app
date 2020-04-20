import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Key from './Key';

export default class Keybord extends Component {
  render() {
    const {keyClick} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.layOut}>
          <Key
            Tag="x-1"
            keyLog="^-1"
            math="inv"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            Tag="&radic;"
            math="sqrt"
            keyLog="&radic;("
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            Tag="x²"
            keyLog="^2"
            math="sqr"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            Tag="^"
            keyLog="^"
            math="power"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            Tag="log"
            keyLog="log("
            math="log"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            Tag="ln"
            keyLog="ln("
            math="log"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
        </View>

        <View style={styles.layOut}>
          <Key
            keyLog="-"
            Tag="(&minus;)"
            math="sub"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog="^3"
            Tag="x^3"
            math="power"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog=""
            Tag="hyp"
            math="log"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog="sin("
            Tag="sin"
            math="trig"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog="cos("
            Tag="cos"
            math="trig"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog="tan("
            Tag="tan"
            math="trig"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
        </View>

        <View style={styles.layOut}>
          <Key
            keyLog=""
            Tag="RCL"
            math=""
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog=""
            Tag="ENG"
            math=""
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog="("
            Tag="("
            math="prnths"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog=")"
            Tag=")"
            math="prnths"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog="!"
            Tag="x!"
            math="fact"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
          <Key
            keyLog=""
            Tag="M+"
            math="log"
            style={styles.btnSmall}
            keyClick={keyClick}
          />
        </View>

        <View style={styles.layOut}>
          <Key
            Tag="1"
            keyLog="1"
            math="number"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="2"
            keyLog="2"
            math="number"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="3"
            keyLog="3"
            math="number"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="DEL"
            math="delete"
            style={styles.btnDelete}
            keyClick={keyClick}
          />
          <Key
            Tag="AC"
            math="clear"
            style={styles.btnDelete}
            keyClick={keyClick}
          />
        </View>

        <View style={styles.layOut}>
          <Key
            Tag="4"
            keyLog="4"
            math="number"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="5"
            keyLog="5"
            math="number"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="6"
            keyLog="6"
            math="number"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="&times;"
            keyLog="&times;"
            math="multiply"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="&divide;"
            keyLog="&divide;"
            math="divide"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
        </View>

        <View style={styles.layOut}>
          <Key
            Tag="7"
            keyLog="7"
            math="number"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="8"
            keyLog="8"
            math="number"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="9"
            keyLog="9"
            math="number"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="+"
            keyLog="+"
            math="sum"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="&minus;"
            keyLog="-"
            math="subtract"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
        </View>

        <View style={styles.layOut}>
          <Key
            Tag="0"
            keyLog="0"
            math="log"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="."
            keyLog="."
            math="comma"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="EXP"
            keyLog="E"
            math="exponent"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="Ans"
            keyLog="Ans"
            math="ans"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
          <Key
            Tag="="
            math="equals"
            style={styles.bigBtn}
            keyClick={keyClick}
          />
        </View>
        <View>
          <Key Tag="History" keyLog="0" math="log" style={styles.btnHis} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 2, marginBottom: 15, alignItems: 'center'},
  bigBtn: {
    backgroundColor: '#888fa1',
    color: '#fff',
    width: 60,
    height: 50,
    margin: 12,
    fontSize: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },

  btnSmall: {
    backgroundColor: '#202742',
    width: 50,
    height: 40,
    margin: 10,
    borderRadius: 11,
  },

  btnDelete: {
    backgroundColor: '#995b7a',
    color: '#fff',
    width: 60,
    height: 50,
    margin: 12,
    fontSize: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },

  btnHis: {
    backgroundColor: '#202742',
    color: '#fff',
    width: 390,
    height: 50,
    margin: 12,
    fontSize: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },

  layOut: {
    flexDirection: 'row',
  },
});
