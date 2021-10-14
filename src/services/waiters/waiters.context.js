import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WaitersContext = createContext();

export const WaitersContextProvider = ({ children }) => {
   const [waiters, setWaiters] = useState([]);

   useEffect(() => {
      let unmounted = false;
      axios
         .get('http://localhost:5000/waiters')
         .then((res) => {
            if (!unmounted) setWaiters(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
      return () => {
         unmounted = true;
      };
   }, [waiters]);

   const addWaiter = (newWaiter) => {
      setWaiters([...waiters, newWaiter]);
      axios
         .post('http://localhost:5000/waiters', newWaiter)
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const getWaiter = (id) => {
      return waiters[waiters.findIndex((wai) => wai._id === id)];
   };

   const modifyWaiter = (id, waiter) => {
      axios
         .patch(`http://localhost:5000/waiters/${id}`, waiter)
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteWaiter = (id) => {
      axios
         .patch(`http://localhost:5000/waiters/delete/${id}`)
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <WaitersContext.Provider
         value={{
            waiters,
            addWaiter,
            getWaiter,
            modifyWaiter,
            deleteWaiter,
         }}
      >
         {children}
      </WaitersContext.Provider>
   );
};
