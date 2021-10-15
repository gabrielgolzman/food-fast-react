import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase/compat/app';

import ProductsTable from './components/tables/ProductsTable';
import ReservationTable from './components/tables/ReservationsTable';
import InvoicesTable from './components/tables/InvoicesTable';
import TablesTable from './components/tables/TablesTable';
import WaitersTable from './components/tables/WaitersTable';
import Layout from './components/util/ui/Layout/Layout';
import Login from './components/auth/Login';
import { ProductsContextProvider } from './services/products/products.context';
import { SocketContextProvider } from './services/socket/socket.context';
import { ReservationsContextProvider } from './services/reservations/reservations.context';
import { WaitersContextProvider } from './services/waiters/waiters.context';
import { TablesContextProvider } from './services/tables/tables.context';
import { InvoicesContextProvider } from './services/invoices/invoices.context';
import { AuthenticationContext } from './services/auth/authentication.context';

const firebaseConfig = {
   apiKey: 'AIzaSyBACVXJIeBBGbUxDeU34M5ZcDiOsKnFR3A',
   authDomain: 'food-fast-react-admin.firebaseapp.com',
   projectId: 'food-fast-react-admin',
   storageBucket: 'food-fast-react-admin.appspot.com',
   messagingSenderId: '123753933169',
   appId: '1:123753933169:web:9419b5b225ca4599a16ed0',
   measurementId: 'G-0R6EKLRL6V',
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

const App = () => {
   const { isAuthenticated } = useContext(AuthenticationContext);
   const routes = isAuthenticated ? (
      <Layout>
         <Switch>
            <Route path="/invoices">
               <InvoicesTable />
            </Route>
            <Route path="/reservations">
               <ReservationTable />
            </Route>
            <Route path="/tables">
               <TablesTable />
            </Route>
            <Route path="/waiters">
               <WaitersTable />
            </Route>
            <Route path="/">
               <ProductsTable />
            </Route>
         </Switch>
         <Redirect to="/" />
      </Layout>
   ) : (
      <>
         <Switch>
            <Route exact path="/auth">
               <Login />
            </Route>
            <Redirect to="/auth" />
         </Switch>
      </>
   );

   return (
      <SocketContextProvider>
         <ProductsContextProvider>
            <ReservationsContextProvider>
               <WaitersContextProvider>
                  <TablesContextProvider>
                     <InvoicesContextProvider>{routes}</InvoicesContextProvider>
                  </TablesContextProvider>
               </WaitersContextProvider>
            </ReservationsContextProvider>
         </ProductsContextProvider>
      </SocketContextProvider>
   );
};

export default App;
