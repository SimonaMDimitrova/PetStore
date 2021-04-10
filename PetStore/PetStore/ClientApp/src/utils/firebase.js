import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBaz1YCDAbJ3eynIwFvcEZlfm3Em_7PrUk",
    authDomain: "pet-store-2af77.firebaseapp.com",
    projectId: "pet-store-2af77",
    storageBucket: "pet-store-2af77.appspot.com",
    messagingSenderId: "176868281911",
    appId: "1:176868281911:web:cdf162348beab47c8bf9b2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
