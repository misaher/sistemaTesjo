import {useState} from 'react'
import {Link} from 'react-router-dom';
import LogoTc  from '../../imagenes/LogoTc.jpg' 
import Registro from '../auth/Registro';
import Login  from  '../auth/Login'


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
                      <button className="btn btn-primary btn-lg bmenu"><Link to={'/paseAutomatico'}className="linkMen">CONVENIO UAEM </Link></button>
                      <button className="btn btn-primary btn-lg bmenu"><Link to={'/paseAutomatico'}className="linkMen">RECHAZO CERO</Link></button>
                </div>
                 <div className="text">
                 <p className="textAv">Si no es así favor de resgistrarse favor de registrarse por la opciónde <b>Examen de admisión</b> en el siguiente boton</p> 
                 </div>
                  <div><button className="btn btn-primary btn-lg bmenu"><Link to={'/paseAutomatico'}className="linkMen">EXAMEN DE ADMISIÓN</Link></button></div>
                
              </div>
            

              <div className="redes">
                    <div>
                     <a className="redesH" href="#">Facebook</a>
                     <a className="redesH" href="#">Twitter</a>
                     </div>
              </div>

                  

           </>
    )
}

export default Principal