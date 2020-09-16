import React, { useState, createContext } from 'react';

export const RootContext = createContext();

export const RootContextProvider = props => {
  const [rootStore, setRootStore] = useState({ drawerOpen: false });

  return (
    <RootContext.Provider value={[rootStore, setRootStore]}>
      {props.children}
    </RootContext.Provider>
  )
}
