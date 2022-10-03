import React, { createContext, useState } from 'react';

const Provider = ({ children }) =>{
  const [isLogged,setIsLogged] = useState(false);
  const [userInfo,setUserInfo] = useState([]);
  
  return (            
          <AppContext.Provider value={[isLogged,setIsLogged, userInfo, setUserInfo]}>
              {children}
          </AppContext.Provider>  
  );
}

export default Provider;
export const AppContext = createContext();