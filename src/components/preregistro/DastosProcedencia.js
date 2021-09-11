const DastosProcedencia = () => {

    const guardarDatos=(e)=>{
        e.preventDefault();
        console.log("Ok Save");

}
const  siguiente =()=>{
    console.log('Ok siguiente');
}

    return(
        <>
        <div className="contenedorG">
        <h2> Datos de Escuela de Procedencia</h2>
           <div className="row">
            <div className="col-3"></div>   
           <div className="col-6">
             <h3>Institución Lugar,promedio, turno</h3>
             <p>
            Si obtuviste tu certificado de bachillerato por medio del <b>acuerdo 286</b> Selecciona SEP Acuerdo 286 en los campos Entidad, Municipio y escuela donde estudiaste el Bachillerato 
            </p>    
           </div>
           </div>
           <div className="mt-5">
               
               <form className="mb-5" onSubmit={e=>guardarDatos(e)}>
                  <div className="row">
                <p className="mb-3">Entidad, municipio y nombre de tu institucion de procedencia</p>
               <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Entidad/Estado de tu bachillerato</label>
                <select id="otra" className="form-select">
                    <option>Estado de México</option>
                    </select>
                    </div>
                    <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Municipio/Delegacion de tu bschillerato</label>
                <select id="otra" className="form-select">
                    <option>Jocotitlán</option>
                    </select>
                    </div>
                    </div>
                 <div className="mb-3">
                 <label for="disabledSelect" className="form-label">Nombre de la escuela donde estudiaste tu bachillerato (Para que aparezca tu escuela, debes seleccionar correctamente el municipio donde esta ubicada)</label>
                <select id="otra" className="form-select">
                    <option>SELECCIONA LA ESCUELA DONDE ESTUDIASTE TU BACHILLERATO</option>
                    </select>
                
                 </div>
                  <hr></hr>
                  <div className="mb-3">
                      <h5>Ámbito Escolar</h5>
                 <label for="disabledSelect" className="form-label">Selecciona si aún continuas o no estudiando</label>
                <select id="otra" className="form-select">
                    <option selected="true" disabled="disabled">Selecciona una Opción</option>
                    <option>Sí</option>
                    <option>No</option>
                    </select>
                
                 </div> 
                 <div className="row">
                 <div className="mb-2 col-5">
                    
                 <label for="disabledSelect" className="form-label">¿En que turno estudiaste el Bachillerato?</label>
                <select id="otra" className="form-select">
                <option selected="true" disabled="disabled">Selecciona una Opción</option>
                    <option>Matutino</option>
                    <option>Vespertino</option>
                    </select>
                     
                 </div>
                 </div>
                  <div className="row mt-3">
                 <div className="botonesForm col-4">
                <button type="submit" className="btn btn-primary">Guardar</button>
                <button type="button" onClick={()=>siguiente()} className="btn btn-primary">Siguiente</button>
                </div>
                </div>
              </form> 
           </div>

        </div>
        </>
        
    )
}
    


export default DastosProcedencia