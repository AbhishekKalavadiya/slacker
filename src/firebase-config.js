import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDKaMqpX4Dmx7qVET4RCAIh2qHqb7I5dVM",
    authDomain: "slacker-ff14f.firebaseapp.com",
    databaseURL: "https://slacker-ff14f.firebaseio.com",
    projectId: "slacker-ff14f",
    storageBucket: "slacker-ff14f.appspot.com",
    messagingSenderId: "356007896960",
    appId: "1:356007896960:web:787086b6b9a66b4235c365",
    measurementId: "G-BBVETG7C3B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export const auth = firebase.auth()
export const GoogleAuth = new firebase.auth.GoogleAuthProvider()

export default db