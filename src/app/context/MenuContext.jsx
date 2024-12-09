"use client"
import { createContext, ReactNode, useState } from "react";

export const MenuContext = createContext(undefined);

const MenuContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <MenuContext.Provider value={{ open, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider