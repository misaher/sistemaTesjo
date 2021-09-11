import  {React} from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
   
     return(
          <>
        <aside className="AsideUs">
          <ul className="asideM">
              <li className="opli"><Link to="/" className="opUser"> Perfil</Link></li>
              <li className="opli">Preinscripciones</li>
              <li className="opli">Información</li>
          </ul>

        </aside>
        </>
     )
}

export default Menu