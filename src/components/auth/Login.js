  import React from 'react';
  import tec  from '../../imagenes/tec.jpg';
  import {Link} from 'react-router-dom';
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
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="correo @" aria-describedby="emailHelp"/>
         
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="********"/>
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

     