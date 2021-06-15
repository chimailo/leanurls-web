import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/analytics";
import "firebase/performance";
import { isBrowser } from './auth';

// Firebase web config
const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);

  if (isBrowser) {
    firebase.auth();

    if ('measurementId' in config) {
      firebase.analytics()
      firebase.performance()
    }
  }
}

export default firebase