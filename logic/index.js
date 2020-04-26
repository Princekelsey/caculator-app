const math = require('mathjs');
const he = require('he');
import Fire from '../firebase';

class Calculator {
  constructor() {
    (this.result = 0),
      (this.log = ''),
      (this.clickedEquals = false),
      (this.ans = 0);
  }

  setState(value) {
    Object.assign(this, value);
  }

  keyClick(keyLog, math) {
    const currentLog = this.log;
    const clickedEquals = this.clickedEquals;
    if (math === 'clear') {
      this.setState({log: '', result: 0});
    }

    if (math === 'delete') {
      if (currentLog.charAt(currentLog.length - 2).match(/[ns]/)) {
        this.setState({log: currentLog.slice(0, currentLog.length - 4)});
      } else {
        this.setState({log: currentLog.slice(0, currentLog.length - 1)});
      }
    }

    if (math === 'equals') {
      this.equalsPressed(currentLog);
    }

    if (math.match(/trig|log|number|comma|prnths|ans|sqrt|exponent|fact/)) {
      if (clickedEquals) this.setState({log: keyLog, clickedEquals: false});
      else this.setState({log: currentLog + keyLog});
    }

    if (math.match(/sum|sub|multiply|divide|power|sqr|inv/)) {
      if (clickedEquals)
        this.setState({log: `Ans${keyLog}`, clickedEquals: false});
      else this.setState({log: currentLog + keyLog});
    }
  }

  equalsPressed(currentLog) {
    const times = he.decode('&#x000D7;');
    const divide = he.decode('&divide;');
    const sqrt = he.decode('&radic;');
    const sqrtReg = new RegExp(sqrt, 'g');

    // change log so it's understanable to mathjs eval() method
    const newLog = currentLog
      .replace(times, '*')
      .replace(divide, '/')
      .replace(/Ans/g, `(${this.ans.toString()})`)
      .replace(/E/g, '10^')
      .replace(/log/g, 'log10')
      .replace(/ln/g, 'log')
      .replace(sqrtReg, 'sqrt');

    try {
      let result = math.evaluate(newLog);

      let finalResult;

      if (currentLog === '') {
        result = 0;
      }

      // trim result if too long
      if (result.toString().length > 11) {
        finalResult = result.toString().slice(0, 11);
      } else finalResult = result;

      this.setState({
        ans: finalResult,
        result: finalResult,
        clickedEquals: true,
      });

      // add to database
      Fire.addItem(this.log, finalResult);
    } catch (error) {
      // this.setState({ log: "Syntax Error", clickedEquals: true });
    }
  }

  mainDisplay() {
    return this.log;
  }

  calculatedResult() {
    return this.result;
  }
}

module.exports = Calculator;
