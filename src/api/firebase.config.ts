import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBbv5WZuQvWL9QN_38LIPfBfPd49R5QsNU',
  authDomain: 'shopping-list-9ed52.firebaseapp.com',
  projectId: 'shopping-list-9ed52',
  storageBucket: 'shopping-list-9ed52.appspot.com',
  messagingSenderId: '492544120606',
  appId: '1:492544120606:web:c3df540500bee927049b0f',
  measurementId: 'G-Q4QTMQ7VPG',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
