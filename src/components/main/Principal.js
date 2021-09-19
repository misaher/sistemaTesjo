import {useState} from 'react'
import {Link} from 'react-router-dom';
import LogoTc  from '../../imagenes/LogoTc.jpg' 
import Registro from '../auth/Registro';
import Login  from  '../auth/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons'
const Principal = () => {
  const [datos,setDatos] = useState(0)
  const [logeado,setLogeado]= useState(0)
   console.log('Logeado----->>>>>',logeado);
  const resgistrarse = ()=>{
             console.log("Registrarse")
            
  }    
    return(
           <>
              <div className="">
                 {logeado?
                <div className="nombreUsu">
                 <h2>Hola Juan :)</h2>
                </div>
                  :
                <div className="tutuP">
                     <div className="titu"> <button onClick={()=> console.log('Hi')} className="btn btn-success"><Link to="/registro" className="linkMen">Registrarse</Link></button> </div> 
                    
                     <div className="titu"> <button className="btn btn-success"><Link to="/login" className="linkMen"> Accesar</Link></button> </div>
                 </div>} 
                    
              </div>
              <div  className="contenedor2">
                <img   alt="Logo Tec" className="logoPrincipal" src={LogoTc}/>
                <div className="botmenu">
                      <button className="btn btn-primary btn-lg bmenu"><Link to={'/paseAutomatico'}className="linkMen">PASE AUTOMATICO</Link></button>  
                </div>
                <div className="text">
                 <p className="textAv">Si ya cuentas con la hoja de convenio UAEM favor de registrarse y posteriormente seguir con el proceso en el botón de <b><u>CONVENIO UAEM</u></b></p>
                 </div>
                 <div>
                 <button className="btn btn-primary btn-lg bmenu"><Link to={'/paseAutomatico'}className="linkMen">CONVENIO UAEM </Link></button>
                 </div>
                 <div>
                       <p className="textAv">Si ya cuentas con la hoja de rechazo cero favor de registrarse y posteriormente seguir con el proceso en el botón de <b><u>RECHAZO CERO</u></b></p>
                   </div>
                  <div>
                  <button className="btn btn-primary btn-lg bmenu"><Link to={'/paseAutomatico'}className="linkMen">RECHAZO CERO</Link></button>
                    </div> 
                    <div>
                       
                    </div>
                 <div className="text">
                 <p className="textAv">Si no es así favor de resgistrarse favor de registrarse por la opciónde <b>Examen de admisión</b> en el siguiente boton</p> 
                 </div>
                  <div><button className="btn btn-primary btn-lg bmenu"><Link to={'/paseAutomatico'}className="linkMen">EXAMEN DE ADMISIÓN</Link></button></div>
                
              </div>
             <div>


             </div>

              <div className="redes">
                    <div>
                    <button type="button" className="btn btn-facebook btn-icon">
               <span className="btn-inner--icon"><FontAwesomeIcon icon={faFacebook}/></span>
               <span className="btn-inner--text">Facebook</span>   
                   </button>
                   <button type="button" className="btn btn-twitter btn-icon">
               <span className="btn-inner--icon"><FontAwesomeIcon icon={faTwitter}/></span>
               <span className="btn-inner--text">Twitter</span>
                  </button>
                     </div>
                   
                      
              </div>

                  

           </>
    )
}

export default Principal