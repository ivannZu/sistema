
// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore'; // Importa los servicios que necesitas usar

const firebaseConfig = {
  apiKey: 'AIzaSyCXCtntmoRaen7dPFYG3s15gA2XYTudxTo',
  authDomain: 'sisogem-835d8.firebaseapp.com',
  projectId: 'sisogem-835d8',
  storageBucket: 'sisogem-835d8.appspot.com',
  messagingSenderId: '460896545804',
  appId: '1:460896545804:web:1c60b2609c4f962cb4d229',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
