import { useContext } from 'react';
import {AlertContext} from "../context/alert/AlertContext";

const Alert = () => {
   const alertContext_ = useContext(AlertContext);
   return (
      alertContext_.alert !== null && (
         <div className={`alert alert-${alertContext_.alert.type}`}>
            <i className="fas fa-info-circle"></i>
            { alertContext_.alert.msg }
         </div>
      )
   )
}
export default Alert;