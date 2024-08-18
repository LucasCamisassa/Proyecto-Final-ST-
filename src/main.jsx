import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8o5c8q9lzZv4MhYI_sr39o5XFx-NdQfI",
  authDomain: "base-datos-celulares.firebaseapp.com",
  projectId: "base-datos-celulares",
  storageBucket: "base-datos-celulares.appspot.com",
  messagingSenderId: "203532216672",
  appId: "1:203532216672:web:1fbf0992a65c0ad8b25605"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
