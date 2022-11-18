import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDJctxM_JPuyebbUawEFmSWKzhzho__LGA",
  authDomain: "where-is-nostalgia.firebaseapp.com",
  projectId: "where-is-nostalgia",
  storageBucket: "where-is-nostalgia.appspot.com",
  messagingSenderId: "1059991258549",
  appId: "1:1059991258549:web:76716b4cb9e16a8b4605fc",
  measurementId: "G-ZVM344H38W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);