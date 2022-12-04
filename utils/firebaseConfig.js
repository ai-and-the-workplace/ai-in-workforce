import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCNVTtv0KIjfr5p6gL70NkLFvrfz1SNSQ8',
  authDomain: 'ai-in-workforce-6f88f.firebaseapp.com',
  projectId: 'ai-in-workforce-6f88f',
  storageBucket: 'ai-in-workforce-6f88f.appspot.com',
  messagingSenderId: '807820767554',
  appId: '1:807820767554:web:97c78847d2686b9bfa18db',
  measurementId: 'G-SQ8DVH6NRN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
