import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './routes/RouteSwitch';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDJctxM_JPuyebbUawEFmSWKzhzho__LGA",
  authDomain: "where-is-nostalgia.firebaseapp.com",
  projectId: "where-is-nostalgia",
  storageBucket: "where-is-nostalgia.appspot.com",
  messagingSenderId: "1059991258549",
  appId: "1:1059991258549:web:76716b4cb9e16a8b4605fc",
  measurementId: "G-ZVM344H38W"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch></RouteSwitch>
  </React.StrictMode>
);

