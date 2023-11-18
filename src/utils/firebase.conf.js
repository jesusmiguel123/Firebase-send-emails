import { createRequire } from "node:module";
import { credential } from "firebase-admin";
import * as admin from "firebase-admin";

const require = createRequire(import.meta.url)

// Your web app's Firebase configuration
const firebaseConfig = {
  credential: credential.cert(require(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APP_ID
};

const app = admin.initializeApp(firebaseConfig);

export const db = app.firestore();