import { useState, createContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { useHistory } from 'react-router';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
   const auth = firebase.auth();
   let history = useHistory();

   const onLogin = (email, password) => {
      setIsLoading(true);
      auth
         .signInWithEmailAndPassword(email, password)
         .then((u) => {
            setUser(u);
            setIsLoading(false);
         })
         .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
         });
   };

   auth.onAuthStateChanged((usr) => {
      if (usr) {
         setUser(usr);
         setIsLoading(false);
      } else {
         setIsLoading(false);
      }
   });

   const onLogout = async () => {
      await auth.signOut();
      setUser(null);
      setError(null);
      history.push('/auth');
   };

   return (
      <AuthenticationContext.Provider
         value={{
            isAuthenticated: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onLogout,
         }}
      >
         {children}
      </AuthenticationContext.Provider>
   );
};
