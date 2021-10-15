import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TablesContext = createContext();

export const TablesContextProvider = ({ children }) => {
   const [tables, setTables] = useState([]);

   useEffect(() => {
      console.log('Tables mounted');
      axios
         .get('http://192.168.0.6:5000/tables')
         .then((res) => {
            setTables(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   const addTable = (newTable) => {
      axios
         .post('http://192.168.0.6:5000/tables', newTable)
         .then((res) => {
            setTables([...tables, newTable]);
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
         .patch(`http://192.168.0.6:5000/tables/${id}`, table)
         .then((res) => {
            res.send({ status: 200 });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const resolveWarning = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/tables/toggle_warning/${id}`)
         .then((res) => {
            res.send({ status: 200 });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteTable = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/tables/delete/${id}`)
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
            resolveWarning,
            deleteTable,
         }}
      >
         {children}
      </TablesContext.Provider>
   );
};
