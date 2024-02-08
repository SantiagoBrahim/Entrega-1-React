import { createContext } from "react";

export const phoneNavbarOpen = {
  Open: {
    isOpen: true,
    display: "flex",
  },
  Closed: {
    isOpen: false,
    display: "none",
  },
};

const phoneNavContext = createContext(phoneNavbarOpen.Closed);

export default phoneNavContext;
