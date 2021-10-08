import { createContext } from 'react';

export const InvoicesContext = createContext();

let mock = require('../../data/mock.json');

export const InvoicesContextProvider = ({ children }) => {
   const invoices = mock.invoices;

   const getInvoice = (id) => {
      return invoices[invoices.findIndex((inv) => inv.idInvoice === id)];
   };

   return (
      <InvoicesContext.Provider
         value={{
            invoices,
            getInvoice,
         }}
      >
         {children}
      </InvoicesContext.Provider>
   );
};
