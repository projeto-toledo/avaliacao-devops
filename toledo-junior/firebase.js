import firebase from '@react-native-firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzZSFCmJiOx7JYkAd061YFQzMgazOpfs0",
    authDomain: "toledo-junior.firebaseapp.com",
    projectId: "toledo-junior",
    storageBucket: "toledo-junior.appspot.com",
    messagingSenderId: "586308480226",
    appId: "1:586308480226:web:4221aaf208a8c82b8542bb"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;