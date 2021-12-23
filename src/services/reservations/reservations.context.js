import { createContext, useState, useEffect } from 'react';
import { useSockets } from '../socket/socket.context';
import axios from 'axios';

import { EVENTS } from '../../config/events';

export const ReservationsContext = createContext();

export const ReservationsContextProvider = ({ children }) => {
   const [reservations, setReservations] = useState([]);
   const { socket } = useSockets();

   useEffect(() => {
      socket.on(EVENTS.SERVER.NEW_RESERVATION, (newReservation) => {
         console.log(newReservation);
         setReservations([...reservations, newReservation.newReservation]);
      });

      socket.on(EVENTS.SERVER.CLIENT.RESERVATION_DELETED, (id) => {
         let newReservations = [...reservations];
         newReservations.splice(
            reservations.findIndex((res) => res._id === id),
            1
         );
         setReservations(newReservations);
      });
   }, [reservations, socket]);

   useEffect(() => {
      axios
         .get('http://192.168.0.6:5000/reservations')
         .then((res) => {
            setReservations(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   const toggleReservation = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/reservations/toggle_admission/${id}`)
         .then((res) => {
            let newReservations = [...reservations];
            let oldRes =
               newReservations[reservations.findIndex((res) => res._id === id)];
            oldRes.state =
               oldRes.state === 'Realizada' ? 'En Local' : 'Realizada';
            newReservations[reservations.findIndex((res) => res._id === id)] =
               oldRes;
            setReservations(newReservations);
            socket.emit(EVENTS.ADMIN.TOGGLE_RESERVATION, { newReservations });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteReservation = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/reservations/delete/${id}`)
         .then((res) => {
            let newReservations = [...reservations];
            newReservations.splice(
               reservations.findIndex((pro) => pro._id === id),
               1
            );
            setReservations(newReservations);
            socket.emit(EVENTS.ADMIN.RESERVATION_DELETED, { id });
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
