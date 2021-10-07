import { createContext, useState } from 'react';

export const WaitersContext = createContext();

let mock = require('../../data/mock.json');

export const WaitersContextProvider = ({ children }) => {
   const [waiters, setWaiters] = useState(mock.waiters);

   const addWaiter = (newWaiter) => {
      setWaiters([...waiters, newWaiter]);
   };

   const getWaiter = (id) => {
      return waiters[waiters.findIndex((wai) => wai.id === id)];
   };

   const modifyWaiter = (id, waiter) => {
      let myWaiterIndex = waiters.findIndex((wai) => wai.id === id);
      waiters[myWaiterIndex].name = waiter.name;
      waiters[myWaiterIndex].address = waiter.address;
      waiters[myWaiterIndex].DNI = waiter.DNI;
      waiters[myWaiterIndex].dateOfBirth = waiter.dateOfBirth;
      waiters[myWaiterIndex].telephone = waiter.telephone;
   };

   const deleteWaiter = (id) => {
      const newWaiterArray = waiters.filter((wai) => wai.id !== id);
      setWaiters([...newWaiterArray]);
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
