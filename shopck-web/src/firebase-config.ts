import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
  apiKey: "AIzaSyDwr4qudL4Ua6HxCN94q1-C7RUHtxWNpfE",
  authDomain: "shopck-bfd4a.firebaseapp.com",
  projectId: "shopck-bfd4a",
  storageBucket: "shopck-bfd4a.appspot.com",
  messagingSenderId: "77725981221",
  appId: "1:77725981221:web:d20f1c31c87ba980a2fdcc",
  measurementId: "G-NN3XGG3381"
};

firebase.initializeApp(config);

var storage = firebase.storage();

export {
    storage, firebase as default
};