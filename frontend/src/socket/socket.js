import { io } from "socket.io-client";
import { serverUrl } from "../main";

let socket = null;

export const initSocket = (userId) => {
  if (!socket) {
    socket = io(serverUrl, {
      query: { userId }
    });
  }
  return socket;
};

export const getSocket = () => socket;
