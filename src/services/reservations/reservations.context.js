import { createContext, useState } from 'react';

export const ReservationsContext = createContext();

let mock = require('../../data/mock.json');

export const ReservationsContextProvider = ({ children }) => {
   const [reservations, setReservations] = useState(mock.reservations);

   const deleteReservation = (id) => {
      const newReservationArray = reservations.filter((res) => res.id !== id);
      setReservations([...newReservationArray]);
   };

   return (
      <ReservationsContext.Provider
         value={{
            reservations,
            deleteReservation,
         }}
      >
         {children}
      </ReservationsContext.Provider>
   );
};
