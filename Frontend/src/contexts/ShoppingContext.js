import React, { createContext, useState } from 'react';

const Provider = ({ children }) =>{
  const [isLogged,setIsLogged] = useState(false);
  const [userInfo,setUserInfo] = useState([]);
  const [carrito, setCarrito] = useState("mensaje");
  const [car, setCar] = useState("mensaje");
  
  return (            
          <AppContext.Provider 
          value={[
            isLogged,
            setIsLogged,
            userInfo,
            setUserInfo,
            car,
            setCar,
          ]}>
              {children}
          </AppContext.Provider>  
  );
}

export default Provider;
export const AppContext = createContext();