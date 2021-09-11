import {useState} from  'react';


const DatosCarrera = () => {
     
    const [datosCar,setDatosC] = useState([

    ])
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
           <h2> Datos de Carrera</h2>
           <form onSubmit={e=>guardarDatos(e)}>
 
    <legend>Favor de seleccionar la Carrera de tu preferencia</legend>

    <div className="mb-3">
      <label for="disabledSelect" className="form-label">Selecciona la opción que deseas, seguido del Campus de tu preferencia</label>
      <select id="otra" className="form-select">
        <option>SELECCIÓN DE CARRERA</option>
        <option>Ingeniería Electrómecanica</option>
        <option>Ingeniería Industrial</option>
        <option>Ingeniería en Sistemas Computacionales</option>
        <option>Licenciatura en Arquitectura</option>
        <option>Licenciatura en Contador Público</option>
        <option>Ingeniería en Gestión Empresarial</option>
        <option>Ingeniería Quimica</option>
        <option>Ingeniería en Materiales</option>
        <option>Ingeniería en Animación Digital</option>
        <option>Licenciatura en Turismo con Especialidad en Gatrónomia</option>
        <option>Ingeniería en Logística</option>
        
      </select>
    </div>
    <div className="mb-3">
      <label for="disabledSelect" className="form-label">Selecciona la opción que deseas, seguido del Campus de tu preferencia</label>
      <select id="otra" className="form-select">
        <option>SELECCIÓN DE CAMPUS</option>
        <option>Jocotitlán</option>
        <option>Aculco</option>
        </select>
        </div>
      <div className="botonesForm">
    <button type="submit" className="btn btn-primary">Guardar</button>
    <button type="button" onClick={()=>siguiente()} className="btn btn-primary">Siguiente</button>
    </div>
</form>
           </div>
        </>
    )
}
    


export default DatosCarrera