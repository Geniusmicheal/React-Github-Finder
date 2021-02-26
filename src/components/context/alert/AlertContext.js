import React, { createContext,useState } from "react";

export const AlertContext = createContext();

const AlertContextState_ = (props) => {
   const [ alert , setAlert] = useState(null);

   const showAlert = (msg, type) => { 
      setAlert({msg,type});
      setTimeout(() => setAlert(null), 5000);
   }

   return (<AlertContext.Provider value={{ alert, showAlert }}> {props.children}</AlertContext.Provider>);
 
}

export default AlertContextState_;