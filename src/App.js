import {
   Route,
   BrowserRouter as Router,
   Switch,
   Redirect,
} from 'react-router-dom';

import ProductsTable from './components/tables/ProductsTable';
import ReservationTable from './components/tables/ReservationsTable';
import InvoicesTable from './components/tables/InvoicesTable';
import TablesTable from './components/tables/TablesTable';
import WaitersTable from './components/tables/WaitersTable';
import Layout from './components/util/ui/Layout/Layout';

const App = () => {
   const routes = (
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
         <Redirect to="/" />
      </Switch>
   );

   return (
      <Router>
         <Layout>
            <h1>FoodFast - Web App</h1>
            {routes}
         </Layout>
      </Router>
   );
};

export default App;
