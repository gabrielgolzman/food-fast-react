import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useSockets } from '../socket/socket.context';
import { EVENTS } from '../../config/events';

export const TablesContext = createContext();

export const TablesContextProvider = ({ children }) => {
   const [tables, setTables] = useState([]);
   const { socket } = useSockets();

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

   useEffect(() => {
      socket.on(EVENTS.SERVER.CLIENT.HELP_ASKED, (number) => {
         axios
            .get('http://192.168.0.6:5000/tables')
            .then((res) => {
               setTables(res.data);
            })
            .catch((error) => {
               console.log(error);
            });
      });
   }, [socket]);

   const addTable = (newTable) => {
      axios
         .post('http://192.168.0.6:5000/tables', newTable)
         .then((res) => {
            newTable = { ...newTable, _id: res.data.tableId };
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
            let newTables = [...tables];
            newTables[tables.findIndex((tab) => tab._id === id)] =
               res.data.modifiedTable;
            setTables(newTables);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const resolveWarning = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/tables/toggle_warning/${id}`)
         .then((res) => {
            let newTables = [...tables];
            let oldTab = newTables[tables.findIndex((tab) => tab._id === id)];
            oldTab.needsHelp = oldTab.needsHelp ? false : true;
            newTables[tables.findIndex((tab) => tab._id === id)] = oldTab;
            setTables(newTables);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteTable = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/tables/delete/${id}`)
         .then((res) => {
            let newTables = [...tables];
            newTables.splice(
               tables.findIndex((tab) => tab._id === id),
               1
            );
            setTables(newTables);
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
