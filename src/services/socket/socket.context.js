import { io } from 'socket.io-client';
import { createContext, useContext } from 'react';

const socket = io('http://192.168.1.42:5000/');

export const SocketContext = createContext({ socket });

export const SocketContextProvider = ({ children }) => {
   return (
      <SocketContext.Provider value={{ socket }}>
         {children}
      </SocketContext.Provider>
   );
};

export const useSockets = () => useContext(SocketContext);
