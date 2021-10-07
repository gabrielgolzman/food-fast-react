import { createContext, useState } from 'react';

export const TablesContext = createContext();

let mock = require('../../data/mock.json');

export const TablesContextProvider = ({ children }) => {
   const [tables, setTables] = useState(mock.tables);

   const addTable = (newTable) => {
      setTables([...tables, newTable]);
   };

   const getTable = (id) => {
      return tables[tables.findIndex((tab) => tab.id === id)];
   };

   const modifyTable = (id, table) => {
      let myTableIndex = tables.findIndex((tab) => tab.id === id);
      tables[myTableIndex].number = table.number;
      tables[myTableIndex].capacity = table.capacity;
   };

   const deleteTable = (id) => {
      const newTablesArray = tables.filter((tab) => tab.id !== id);
      setTables([...newTablesArray]);
   };

   return (
      <TablesContext.Provider
         value={{
            tables,
            addTable,
            getTable,
            modifyTable,
            deleteTable,
         }}
      >
         {children}
      </TablesContext.Provider>
   );
};
