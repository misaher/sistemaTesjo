import {useState,useEffect} from  'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
const DatosCarrera = () => {
      const estados =[
        { "clave": "AGS", "nombre": "AGUASCALIENTES" },
        { "clave": "BC",  "nombre": "BAJA CALIFORNIA" },
        { "clave": "BCS", "nombre": "BAJA CALIFORNIA SUR" },
        { "clave": "CHI", "nombre": "CHIHUAHUA" },
        { "clave": "CHS", "nombre": "CHIAPAS" },
        { "clave": "CMP", "nombre": "CAMPECHE" },
        { "clave": "CMX", "nombre": "CIUDAD DE MEXICO" },
        { "clave": "COA", "nombre": "COAHUILA" },
        { "clave": "COL", "nombre": "COLIMA" },
        { "clave": "DGO", "nombre": "DURANGO" },
        { "clave": "GRO", "nombre": "GUERRERO" },
        { "clave": "GTO", "nombre": "GUANAJUATO" },
        { "clave": "HGO", "nombre": "HIDALGO" },
        { "clave": "JAL", "nombre": "JALISCO" },
        { "clave": "MCH", "nombre": "MICHOACAN" },
        { "clave": "MEX", "nombre": "ESTADO DE MEXICO" },
        { "clave": "MOR", "nombre": "MORELOS" },
        { "clave": "NAY", "nombre": "NAYARIT" },
        { "clave": "NL",  "nombre": "NUEVO LEON" },
        { "clave": "OAX", "nombre": "OAXACA" },
        { "clave": "PUE", "nombre": "PUEBLA" },
        { "clave": "QR",  "nombre": "QUINTANA ROO" },
        { "clave": "QRO", "nombre": "QUERETARO" },
        { "clave": "SIN", "nombre": "SINALOA" },
        { "clave": "SLP", "nombre": "SAN LUIS POTOSI" },
        { "clave": "SON", "nombre": "SONORA" },
        { "clave": "TAB", "nombre": "TABASCO" },
        { "clave": "TLX", "nombre": "TLAXCALA" },
        { "clave": "TMS", "nombre": "TAMAULIPAS" },
        { "clave": "VER", "nombre": "VERACRUZ" },
        { "clave": "YUC", "nombre": "YUCATAN" },
        { "clave": "ZAC", "nombre": "ZACATECAS" } 
    ];
    
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
      <label for="disabledSelect" className="form-label">Selecciona la opción que deseas, seguido del Campus de tu preferencia</label>
      <select id="otra"  name="carrera" className="form-select" onChange={(e)=> guardarCarrera(e.target)}>
        <option>SELECCIÓN DE CARRERA</option>
        <option value="Ingeniería Electrómecanica">Ingeniería Electrómecanica</option>
        <option value="Ingeniería Industrial">Ingeniería Industrial</option>
        <option value="Ingeniería en Sistemas Computacionales">Ingeniería en Sistemas Computacionales</option>
        <option>Licenciatura en Arquitectura</option>
        <option>Licenciatura en Contador Público</option>
        <option>Ingeniería en Gestión Empresarial</option>
        <option>Ingeniería Quimica</option>
        <option>Ingeniería en Materiales</option>
        <option>Ingeniería en Animación Digital</option>
        <option>Licenciatura en Turismo con Especialidad en Gatrónomia</option>
        <option>Ingeniería en Logística</option>
        
      </select>
       {valdt? <>
        { val? <label className="validarSucess">Agrega los datos</label> : <label className="validar">Agrega los datos</label> }
       </> : null}
        </div>
    <div className="mb-3">
      <label for="disabledSelect" className="form-label">Selecciona la opción que deseas, seguido del Campus de tu preferencia</label>
      <select id="otra" name="campus" className="form-select" onChange={(e)=> guardarCarrera(e.target)}>
        <option>SELECCIÓN DE CAMPUS</option>
        <option>Jocotitlán</option>
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