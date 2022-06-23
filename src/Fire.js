import Firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCngyITWm9P6aD5ekW3k1pKlgcObILz6tI",
  authDomain: "login-2d045.firebaseapp.com",
  projectId: "login-2d045",
  storageBucket: "login-2d045.appspot.com",
  messagingSenderId: "3338193229",
  appId: "1:3338193229:web:744c96a6ca7ce5005dcf04"
};

const Fire = Firebase.initializeApp(firebaseConfig);

export default Fire;
