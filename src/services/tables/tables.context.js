import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TablesContext = createContext();

export const TablesContextProvider = ({ children }) => {
   const [tables, setTables] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:5000/tables')
         .then((res) => {
            setTables(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [tables]);

   const addTable = (newTable) => {
      setTables([...tables, newTable]);
      axios
         .post('http://localhost:5000/tables', newTable)
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const getTable = (id) => {
      return tables[tables.findIndex((tab) => tab._id === id)];
   };

   const modifyTable = (id, table) => {
      axios
         .patch(`http://localhost:5000/tables/${id}`, table)
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteTable = (id) => {
      axios
         .patch(`http://localhost:5000/tables/delete/${id}`)
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
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
