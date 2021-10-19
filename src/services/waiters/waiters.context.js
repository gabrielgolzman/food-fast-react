import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WaitersContext = createContext();

export const WaitersContextProvider = ({ children }) => {
   const [waiters, setWaiters] = useState([]);

   useEffect(() => {
      console.log('Waiters');
      axios
         .get('http://192.168.1.42:5000/waiters')
         .then((res) => {
            setWaiters(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   const addWaiter = (newWaiter) => {
      axios
         .post('http://192.168.1.42:5000/waiters', newWaiter)
         .then((res) => {
            newWaiter = { ...newWaiter, _id: res.data.waiterId };
            setWaiters([...waiters, newWaiter]);
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
         .patch(`http://192.168.1.42:5000/waiters/${id}`, waiter)
         .then((res) => {
            let newWaiters = [...waiters];
            newWaiters[waiters.findIndex((wai) => wai._id === id)] =
               res.data.modifiedWaiter;
            setWaiters(newWaiters);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteWaiter = (id) => {
      axios
         .patch(`http://192.168.1.42:5000/waiters/delete/${id}`)
         .then((res) => {
            let newWaiters = [...waiters];
            newWaiters.splice(
               waiters.findIndex((wai) => wai._id === id),
               1
            );
            setWaiters(newWaiters);
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
