import { useContext } from "react";
import { userContext } from "../../storage/userContext";
import { FiUser } from "react-icons/fi";

function UserMenu() {
  /*2 Conectar El context al hook useContext */
  const context = useContext(userContext)


  return (
    /*El context tiene adentro una propiedad llamada user que definimos del Provider */
    <p><FiUser/>{context.user}</p>
  )
}

export default UserMenu
