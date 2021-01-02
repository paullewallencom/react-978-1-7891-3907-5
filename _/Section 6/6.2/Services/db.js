import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

firebase.initializeApp({
  apiKey:"AIzaSyCZEWDBhD-2zDRVnl723VikVWjuz8mFldg",
  authDomain: "budgetbuilder-610c8.firebaseapp.com",
  projectId: "budgetbuilder-610c8"
});

const db = firebase.firestore();

export default db;
