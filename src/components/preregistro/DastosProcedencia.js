import  {useHistory}  from 'react-router-dom';
import  {useState} from 'react';
import Swal from 'sweetalert2';

const DastosProcedencia = () => {
      const [datosProce, setDatosP] =useState({
                entidad: '',
                municipio:'',
                escuelaPro: '',
                ambitoEs: '',
                turno: ''
      });
      let history= useHistory();
    const guardarDatos=(e)=>{
        e.preventDefault();
        
        console.log("Ok Save");
         if(datosProce.entidad === '' ||datosProce.municipio === ''|| datosProce.escuelaPro === ''|| datosProce.ambitoEs === ''|| datosProce.turno === ''){
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error ',
                text: 'Favor de selecionar los  campos',
                
              })    
              
         }else{
            Swal.fire(
                'Datos Guardados',
                'Da click para continuar',
                'success'
            )
         }
    
            }
        const  siguiente =()=>{
            history.push('/datosGenerales');
            console.log('Ok siguiente');
        }
        const actualizar= (datos)=>{
                 setDatosP({
                      ...datosProce,
                      [datos.name]: datos.value
                 })
                    console.log('name--->',datos.name);
                    console.log('value-->',datos.value);
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
                <select id="otra" className="form-select" name="entidad" onChange={e=> actualizar(e.target)}>
                <option value="NO">Selecciona la entidad</option>
                    <option value="Estado de México">Estado de México</option>
                    <option value="Oaxaca">Oaxaca</option>
                    </select>
                    </div>
                    <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Municipio/Delegacion de tu bschillerato</label>
                <select id="otra" className="form-select" name="municipio" onChange={(e)=> actualizar(e.target)}>
                <option value="NO">Selecione el municipio</option>
                    <option value="Jocotitlán">Jocotitlán</option>
                    </select>
                    </div>
                    </div>
                 <div className="mb-3">
                 <label for="disabledSelect" className="form-label">Nombre de la escuela donde estudiaste tu bachillerato (Para que aparezca tu escuela, debes seleccionar correctamente el municipio donde esta ubicada)</label>
                <select id="otra" className="form-select" name="escuelaPro" onChange={(e)=> actualizar(e.target)}>
                    <option value="NO">SELECCIONA LA ESCUELA DONDE ESTUDIASTE TU BACHILLERATO</option>
                    <option value="EPO 136">EPO 136</option>
                    </select>
                
                 </div>
                  <hr></hr>
                  <div className="mb-3">
                      <h5>Ámbito Escolar</h5>
                 <label for="disabledSelect" className="form-label">Selecciona si aún continuas o no estudiando</label>
                <select id="otra" className="form-select" name="ambitoEs" onChange={(e)=> actualizar(e.target)}>
                    <option selected="true" disabled="disabled">Selecciona una Opción</option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                    </select>
                
                 </div> 
                 <div className="row">
                 <div className="mb-2 col-5">
                    
                 <label for="disabledSelect" className="form-label">¿En que turno estudiaste el Bachillerato?</label>
                <select id="otra" className="form-select" name="turno" onChange={(e)=> actualizar(e.target)} >
                <option selected="true" disabled="disabled">Selecciona una Opción</option>
                    <option value="Matutino">Matutino</option>
                    <option value="Vesperdino">Vespertino</option>
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