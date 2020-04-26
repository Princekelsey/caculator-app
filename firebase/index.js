import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyB4AWG2h_8u0Qk_qmdqSWzuuRyjtzcVMqE',
        authDomain: 'scientific-calculator-5aa5d.firebaseapp.com',
        databaseURL: 'https://scientific-calculator-5aa5d.firebaseio.com',
        projectId: 'scientific-calculator-5aa5d',
        storageBucket: 'scientific-calculator-5aa5d.appspot.com',
        messagingSenderId: '511747648423',
        appId: '1:511747648423:web:d168e1d84ae1c2a0dfa482',
        measurementId: 'G-MWYX3XT597',
      });
    }
  };

  addItem(input, result) {
    this.db
      .push({
        input,
        result,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      })
      .then(() => {
        console.log('Added');
      })
      .catch(err => {
        console.log(err);
      });
  }

  getData(setData) {
    this.db.on('value', snapshot => {
      const id = snapshot.key;
      let data = snapshot.val();

      if (data) {
        const id = Object.keys(data);
        let items = Object.values(data);
        // console.log(id);
        items.sort((a, b) => a.timestamp < b.timestamp);
        // console.log(sorted);

        setData(items);
      }
    });
  }

  // removeItem()

  get db() {
    return firebase.database().ref('calculator');
  }
}

export default new Fire();
