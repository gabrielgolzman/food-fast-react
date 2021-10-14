import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const InvoicesContext = createContext();

export const InvoicesContextProvider = ({ children }) => {
   const [invoices, setInvoices] = useState([]);

   useEffect(() => {
      let unmounted = false;
      axios
         .get('http://localhost:5000/invoices')
         .then((res) => {
            if (!unmounted) {
               setInvoices(res.data);
            }
         })
         .catch((error) => {
            console.log(error);
         });
      return () => {
         unmounted = true;
      };
   }, [invoices]);

   const getInvoice = (id) => {
      return invoices[invoices.findIndex((inv) => inv._id === id)];
   };

   const toggleServed = (id) => {
      axios
         .patch(`http://localhost:5000/invoices/toggle_served/${id}`)
         .then((res) => {
            res.send({ status: 200 });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const togglePayed = (id) => {
      axios
         .patch(`http://localhost:5000/invoices/toggle_payed/${id}`)
         .then((res) => {
            res.send({ status: 200 });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <InvoicesContext.Provider
         value={{
            invoices,
            toggleServed,
            togglePayed,
            getInvoice,
         }}
      >
         {children}
      </InvoicesContext.Provider>
   );
};
