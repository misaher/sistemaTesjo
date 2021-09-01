import {useState} from 'react'
import {Link} from 'react-router-dom';
import LogoTc  from '../../imagenes/LogoTc.jpg' 
import Registro from '../auth/Registro';
import Login  from  '../auth/Login'


const Principal = () => {
  const [datos,setDatos] = useState(0)

  const resgistrarse = ()=>{
             console.log("Registrarse")
  }    
    return(
           <>
              <div className="">
                <div className="tutuP">
                    <div className="titu"> <button onClick={()=> console.log('Hi')} className="btn btn-success"><Link to="/registro"></Link>Registrarse</button> </div>   
                     <div className="titu"> <h2>Tesjo</h2> </div>
                    <div className="titu"> <button className="btn btn-success"><Link to="/login"></Link>Accesar</button> </div>
                 </div> 
                    
              </div>
              <div  className="contenedor2">
                <img   alt="Logo Tec" className="logoPrincipal" src={LogoTc}/>

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