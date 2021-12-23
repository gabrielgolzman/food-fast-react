import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useSockets } from '../socket/socket.context';
import { EVENTS } from '../../config/events';

export const InvoicesContext = createContext();

export const InvoicesContextProvider = ({ children }) => {
   const [invoices, setInvoices] = useState([]);
   const { socket } = useSockets();

   useEffect(() => {
      console.log('invoices mounted');
      axios
         .get('http://192.168.0.6:5000/invoices')
         .then((res) => {
            setInvoices(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   useEffect(() => {
      socket.on(EVENTS.SERVER.CLIENT.NEW_INVOICE, (invoice) => {
         axios.get('http://192.168.0.6:5000/invoices').then((res) => {
            setInvoices(res.data);
         });
      });
   }, [socket, invoices]);

   const getInvoice = (id) => {
      return invoices[invoices.findIndex((inv) => inv._id === id)];
   };

   const toggleServed = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/invoices/toggle_served/${id}`)
         .then((res) => {
            let newInvoices = [...invoices];
            let oldInv =
               newInvoices[invoices.findIndex((inv) => inv._id === id)];
            oldInv.isServed = oldInv.isServed ? false : true;
            newInvoices[invoices.findIndex((inv) => inv._id === id)] = oldInv;
            setInvoices(newInvoices);
            socket.emit(EVENTS.ADMIN.TOGGLE_SERVED, oldInv);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const togglePayed = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/invoices/toggle_payed/${id}`)
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
