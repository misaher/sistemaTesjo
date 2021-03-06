import {useState,useEffect} from  'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
const DatosCarrera = () => {
      

  const history = useHistory();
       const val=0;
       const valdt= 1
    const [botn,setBtn]= useState(1) 
    console.log( `hola soy ${botn}   `)
    const [datosCar,setDatosC] = useState({
                          carrera:'',
                          campus:''
    });

    useEffect(()=>{
      validador();
    },[datosCar])
                                
    const guardarDatos=(e)=>{
              e.preventDefault();
              console.log("Ok Save");
               Swal.fire({
                title: 'Esta seguro que sus datos son correctos',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                denyButtonText: `No guardar`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Datos guardados!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Datos no guadados', '', 'info')
                }
              })
             /* if(datosCar.carrera === '' || datosCar.campus === ''|| datosCar.carrera === undefined || datosCar.campus === undefined ){
                  console.log('uno',datosCar.carrera)
                  Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un error ',
                    text: 'Favor de selecionar los  campos',
                    
                  })*/
             
                
    }
   const  siguiente =()=>{

             console.log('Ok siguiente-->>');
               history.push('/dastosProcedencia');

   } 
    const validador=()=>{
      const   boton= document.querySelector("#dtc")
      if(datosCar.carrera === '' || datosCar.campus === ''|| datosCar.carrera === undefined || datosCar.campus === undefined ){
           
      }else{
              boton.disabled=false;
      } 
    }
      const  guardarCarrera=(datos)=>{
        
        
                      setDatosC({
                        ...datosCar,
                         [datos.name]: datos.value
                      })
                      
      }

    return(
        <>
           
          <div className="contenedorG">
           <h2> Datos de Carrera</h2>
           <form onSubmit={e=>guardarDatos(e)}>
 
    <legend>Favor de seleccionar la Carrera de tu preferencia</legend>

    <div className="mb-3">
      <label for="disabledSelect" className="form-label">Selecciona la opci??n que deseas, seguido del Campus de tu preferencia</label>
      <select id="otra"  name="carrera" className="form-select" onChange={(e)=> guardarCarrera(e.target)}>
        <option>SELECCI??N DE CARRERA</option>
        <option value="Ingenier??a Electr??mecanica">Ingenier??a Electr??mecanica</option>
        <option value="Ingenier??a Industrial">Ingenier??a Industrial</option>
        <option value="Ingenier??a en Sistemas Computacionales">Ingenier??a en Sistemas Computacionales</option>
        <option>Licenciatura en Arquitectura</option>
        <option>Licenciatura en Contador P??blico</option>
        <option>Ingenier??a en Gesti??n Empresarial</option>
        <option>Ingenier??a Quimica</option>
        <option>Ingenier??a en Materiales</option>
        <option>Ingenier??a en Animaci??n Digital</option>
        <option>Licenciatura en Turismo con Especialidad en Gatr??nomia</option>
        <option>Ingenier??a en Log??stica</option>
        
      </select>
       {valdt? <>
        { val? <label className="validarSucess">Agrega los datos</label> : <label className="validar">Agrega los datos</label> }
       </> : null}
        </div>
    <div className="mb-3">
      <label for="disabledSelect" className="form-label">Selecciona la opci??n que deseas, seguido del Campus de tu preferencia</label>
      <select id="otra" name="campus" className="form-select" onChange={(e)=> guardarCarrera(e.target)}>
        <option>SELECCI??N DE CAMPUS</option>
        <option>Jocotitl??n</option>
        <option>Aculco</option>
        </select>
        </div>
      <div className="botonesForm">
    <button type="submit" id="dtc" className="btn btn-primary" disabled >Guardar</button>
    <button type="button" onClick={()=>siguiente()} className="btn btn-primary">Siguiente</button>
    </div>
</form>
    </div> 
        </>
    )
}
    


export default DatosCarrera