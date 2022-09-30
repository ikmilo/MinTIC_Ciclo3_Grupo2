import React, { createContext, useState } from 'react';

const Provider = ({ children }) =>{
  const [isLogged,setIsLogged] = useState(false);
  return (            
          <AppContext.Provider value={[isLogged,setIsLogged]}>
              {children}
          </AppContext.Provider>  
  );
}

export default Provider;
export const AppContext = createContext();