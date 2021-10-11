

const Perfil = () => {
   
    return( 
        <>
           <div className="contenedor2">
                    <h3>Perfil</h3>
                 <div>
                 <form>
          <div className="mb-6">
              
              <label for="apellidoPaterno" className="form-label">APELLIDO PATERNO</label>
              <input type="text" className="form-control" id="ap_pat" disabled value="Martínez" aria-describedby="emailHelp"/>
             
            </div>
            <div className="mb-6">
              
          <label for="apellidoMaterno" className="form-label">APELLIDO MATERNO</label>
          <input type="text" className="form-control" id="ap_mat"  disabled value="Morales" aria-describedby="emailHelp"/>
         
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">NOMBRE</label>
          <input type="text" className="form-control" id="nombre" disabled value="JUAN"/>
        </div>
        <div className="mb-3">
          <div><label for="exampleInputPassword1" className="form-label">CURP </label> </div>
          <input type="text" className="form-control" id="nombre" disabled value="JFSHDFGFDJYRED"/>
        </div>
        <div className="mb-3">
          <div><label for="exampleInputPassword1" className="form-label">FECHA DE NACIMIENTO </label></div>
          <input type="text" className="form-control" id="fechaNac "  disabled value="15 de Febrero"/>
        </div>
        <div className="mb-3">
          <div><label for="exampleInputPassword1" className="form-label">INGRESA TU PROMEDIO GENERAL OBTENIDO EN EL 5 SEMESTRE</label></div>
          <input type="text" className="form-control" id="promedio" disabled value="80"/>
        </div>
        <div className="mb-3">
          <div><label for="exampleInputPassword1" className="form-label">EMAIL</label></div>
          <input type="email" className="form-control" id="email" disabled value="juan@gmail.com"/>
        </div>
      
        <div className="d-grid gap-2">
        
      </div> 


      </form>

                 </div>


                    
           </div>
        </>
    )
    }

export default Perfil;