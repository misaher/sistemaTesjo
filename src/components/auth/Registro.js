import React from 'react';
import tec  from '../../imagenes/tec.jpg';
import {Link} from 'react-router-dom';
    const Registro = ({setPantalla}) => {
        
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
              
              <label for="apellidoPaterno" className="form-label">APELLIDO PATERNO</label>
              <input type="text" className="form-control" id="ap_pat" placeholder="PEREZ" aria-describedby="emailHelp"/>
             
            </div>
            <div className="mb-6">
              
          <label for="apellidoMaterno" className="form-label">APELLIDO MATERNO</label>
          <input type="text" className="form-control" id="ap_mat" placeholder="MORALES" aria-describedby="emailHelp"/>
         
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">NOMBRE</label>
          <input type="text" className="form-control" id="nombre" placeholder="JUAN"/>
        </div>
        <div className="mb-3">
          <div><label for="exampleInputPassword1" className="form-label">CURP </label> <a href="#">puedes consultar tu curp aqui</a></div>
          <input type="text" className="form-control" id="nombre" placeholder="JFSHDFGFDJYRED"/>
        </div>
          
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="********"/>
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={()=> acion("Dato")} type="button"  >Registrarse</button>
          <div  className="tcentro"><Link to="/" className="btnU">Regresar</Link> </div> 
      </div> 


      </form>
             </div>  
                  

                </div> 
                </>
             
         );
    }
     
    export default Registro;

     