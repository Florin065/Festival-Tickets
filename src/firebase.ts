import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBtO9yFEgHxKY4sZs9bhyMNyiuElhEdD_E',
  authDomain: 'festivaltickets-bc82b.firebaseapp.com',
  databaseURL: 'https://festivaltickets-bc82b-default-rtdb.firebaseio.com',
  projectId: 'festivaltickets-bc82b',
  storageBucket: 'festivaltickets-bc82b.appspot.com',
  messagingSenderId: '1027278446435',
  appId: '1:1027278446435:web:1e7cecee2b1972b57f3d56',
  measurementId: 'G-Z5VBRF1NER',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
