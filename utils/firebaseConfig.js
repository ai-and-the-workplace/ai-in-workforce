import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAvbNhDwe4VpWvsn2ySm1DU1Pr1BWoV9Lo',
  authDomain: 'ai-in-workforce.firebaseapp.com',
  projectId: 'ai-in-workforce',
  storageBucket: 'ai-in-workforce.appspot.com',
  messagingSenderId: '773409017325',
  appId: '1:773409017325:web:14d27c51c2f6bacc2d6be4',
  measurementId: 'G-618R7619BP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
