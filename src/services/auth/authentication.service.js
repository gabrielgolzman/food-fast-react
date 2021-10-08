import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const loginRequest = (email, password) => {
   const auth = firebase.auth();

   return auth.signInWithEmailAndPassword(email, password);
};
