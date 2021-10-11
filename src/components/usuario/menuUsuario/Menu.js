import  {React} from 'react';
import { Link } from 'react-router-dom';
import  User from '../../../imagenes/user.png';
const Menu = () => {
   
     return(
          <>
        <aside className="AsideUs">
          <ul className="asideM">
              <li> <img alt="Avatar" className="avatar" src={User} /> </li>
              <li className="opli"><Link to="/perfil" className="opUser"> Perfil</Link></li>
              <li className="opli"><Link to="/documentacion" className="opUser">Documentacion</Link></li>
              <li className="opli">Información</li>
          </ul>

        </aside>
        </>
     )
}

export default Menu