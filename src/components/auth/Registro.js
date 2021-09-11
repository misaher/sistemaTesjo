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
          <div><label for="exampleInputPassword1" className="form-label">CURP </label> <a href="https://www.gob.mx/curp/" target="_blank">puedes consultar tu curp aqui</a></div>
          <input type="text" className="form-control" id="nombre" placeholder="JFSHDFGFDJYRED"/>
        </div>
        <div className="mb-3">
          <div><label for="exampleInputPassword1" className="form-label">FECHA DE NACIMIENTO </label></div>
          <input type="date" className="form-control" id="fechaNac "/>
        </div>
        <div className="mb-3">
          <div><label for="exampleInputPassword1" className="form-label">INGRESA TU PROMEDIO GENERAL OBTENIDO EN EL 5 SEMESTRE</label></div>
          <input type="text" className="form-control" id="promedio" placeholder=""/>
        </div>
        <div className="mb-3">
          <div><label for="exampleInputPassword1" className="form-label">EMAIL</label></div>
          <input type="email" className="form-control" id="email" placeholder=""/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">PASSWORD</label>
          <input type="password" className="form-control" id="password" placeholder="********"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">PASSWORD</label>
          <input type="password" className="form-control" id="password2" placeholder="********"/>
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={()=> acion("Dato")} type="button"  >Registrarse</button>
        <button className="btn btn-danger"  type="button"><Link to="/" className="linkMen">Regresar</Link></button> 
      </div> 


      </form>
             </div>  
                  

                </div> 
                </>
             
         );
    }
     
    export default Registro;

     