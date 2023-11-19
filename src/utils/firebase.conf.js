import { createRequire } from "node:module";
import { getApps } from "firebase-admin/app";
import { credential } from "firebase-admin";
import * as admin from "firebase-admin";

const require = createRequire(import.meta.url)

const firebaseConfig = {
  credential: credential.cert(require(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APP_ID
};

const alreadyCreatedApp = getApps();

const app = 
  alreadyCreatedApp.length === 0
    ? admin.initializeApp(firebaseConfig)
    : alreadyCreatedApp[0];

export const db = app.firestore();