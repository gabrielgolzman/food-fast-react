export const EVENTS = {
   CONNECTION: 'connection',
   SERVER: {
      NEW_RESERVATION: 'NEW_RESERVATION',
      ADMIN: {
         RESERVATION_DELETED: 'ADMIN_RESERVATION_DELETED',
      },
      CLIENT: {
         RESERVATION_DELETED: 'CLIENT_RESERVATION_DELETED',
      },
      TOGGLE_RESERVATION: 'TOGGLE_RESERVATION',
   },
   CLIENT: {
      NEW_RESERVATION: 'NEW_RESERVATION',
   },
   ADMIN: {
      RESERVATION_DELETED: 'RESERVATION_DELETED',
      TOGGLE_RESERVATION: 'TOGGLE_RESERVATION',
   },
};