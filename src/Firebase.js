import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC-IB_5wrlvlgo1K9mNQIbyP_rHdmCxsyk",
    authDomain: "projeto-pucpr-7db66.firebaseapp.com",
    projectId: "projeto-pucpr-7db66",
    storageBucket: "projeto-pucpr-7db66.appspot.com",
    messagingSenderId: "1091607315889",
    appId: "1:1091607315889:web:452e54329e6e0a9219a990"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;