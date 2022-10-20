import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// let adminApp;

// if (!admin.apps.length) {
//   adminApp = admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//       clientEmail: process.env.REACT_APP_FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.REACT_APP_FIREBASE_PRIVATE_KEY.replace(
//         /\\n/g,
//         "\n"
//       ),
//     }),
//   });
// }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const adminDB = admin.firestore(adminApp);

export { app, db, auth };
