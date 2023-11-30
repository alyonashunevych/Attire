import React from "react";
import { RouterProvider } from "react-router-dom";
import { routing } from "./Routing";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLfQPIPIZOZ4sl4cBJTUVEAux4veX4rxo",
  authDomain: "attire-b2bdb.firebaseapp.com",
  projectId: "attire-b2bdb",
  storageBucket: "attire-b2bdb.appspot.com",
  messagingSenderId: "659662932483",
  appId: "1:659662932483:web:0cc064404c15afd190dc36",
  measurementId: "G-GBBSCSM28Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class App extends React.Component {
  render() {
    return <RouterProvider router={routing} />;
  }
}

export default App;
