// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAtLHNRIycUB5sL0UGHnRTaezqqVCATgdY",
//   authDomain: "tennis-matcher-10619.firebaseapp.com",
//   projectId: "tennis-matcher-10619",
//   storageBucket: "tennis-matcher-10619.firebasestorage.app",
//   messagingSenderId: "112518735673",
//   appId: "1:112518735673:web:98cc96c9cf123499f82ae8",
//   measurementId: "G-WKWPCKNWE7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtLHNRIycUB5sL0UGHnRTaezqqVCATgdY",
  authDomain: "tennis-matcher-10619.firebaseapp.com",
  projectId: "tennis-matcher-10619",
  storageBucket: "tennis-matcher-10619.firebasestorage.app",
  messagingSenderId: "112518735673",
  appId: "1:112518735673:web:98cc96c9cf123499f82ae8",
  measurementId: "G-WKWPCKNWE7"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// 各サービスをエクスポート
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
