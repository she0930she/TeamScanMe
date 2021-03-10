import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDrtj7e3ZRjOYO8zHk3N_8m4oeHfBjqi2Q',
  authDomain: 'scanme-38589.firebaseapp.com',
  projectId: 'scanme-38589',
  appId: '1:53812586607:ios:e6c8495baf2551b41e459a',
  storageBucket: 'gs://scanme-38589.appspot.com/',
//   databaseURL: 'https://scanme-38589-default-rtdb.firebaseio.com/',
//   messagingSenderId: '12345-insert-yourse',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };