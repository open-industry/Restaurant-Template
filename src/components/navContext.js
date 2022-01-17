import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const NavContext = createContext();

// custom hook that returns NavContext for use by components that
// consumes location location context
export function useNavContext() {
  return useContext(NavContext);
}

export function LocationProvider({ children }) {
  const location = useLocation();

  return (
    <NavContext.Provider value={location}>
      {children}
    </NavContext.Provider>
  );
}
