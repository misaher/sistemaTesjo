  import React from 'react';
  import tec  from '../../imagenes/tec.jpg';
  import {Link} from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCoffee, faUser,faEnvelope,faUnlock} from '@fortawesome/free-solid-svg-icons'
    const Login = ({setPantalla}) => {
        
      const acion= (dato)=>{
             console.log("Ok acion--->",dato);  
               
      }
        
        return ( 
          <>
          <div className="logo"> 
                   <div> <img className="logotec"  src={tec} alt="Logo"/>   </div>
                 
           </div>
               <div className="login">
                 
                   
                       <div className="loginEle">
      <form>
            <div className="mb-6">
              
          <label for="exampleInputEmail1" className="form-label">Email address </label>
           <div className="forflex"><span className="icons"><FontAwesomeIcon icon={faEnvelope}/></span><input type="email"  className="form-control inp" id="exampleInputEmail1" placeholder="     Correo @" aria-describedby="emailHelp"/> </div> 
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <div className="forflex"><span className="icons"><FontAwesomeIcon icon={faUnlock}/></span><input type="password" class="form-control  inp" id="exampleInputPassword1" placeholder="      ********"/> </div>
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={()=> acion("Dato")} type="button"  >Iniciar  Sessión</button>
        <button className="btn btn-danger"  type="button"><Link to="/" className="linkMen">Regresar</Link></button>
      </div> 


      </form>
             </div>  
                  

                </div> 
                </>
             
         );
    }
     
    export default Login;

     