import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ReservationsContext = createContext();

export const ReservationsContextProvider = ({ children }) => {
   const [reservations, setReservations] = useState([]);

   useEffect(() => {
      let unmounted = false;
      axios
         .get('http://localhost:5000/reservations')
         .then((res) => {
            if (!unmounted) setReservations(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
      return () => {
         unmounted = true;
      };
   }, [reservations]);

   const toggleReservation = (id) => {
      axios
         .patch(`http://localhost:5000/reservations/toggle_admission/${id}`)
         .then((res) => {
            res.send({ status: 200 });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteReservation = (id) => {
      axios
         .patch(`http://localhost:5000/reservations/delete/${id}`)
         .then((res) => {
            res.send({ status: 200 });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <ReservationsContext.Provider
         value={{
            reservations,
            toggleReservation,
            deleteReservation,
         }}
      >
         {children}
      </ReservationsContext.Provider>
   );
};
