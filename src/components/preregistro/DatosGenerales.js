import Swal from 'sweetalert2';
import  {useState} from 'react';
import Entidades from './Entidades';
const DatosGenerales = () =>{
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
         const [datosGen,setDatos] = useState({
                   domicilio: '',
                   numeroe: '',
                   numeroi: '',
                   colonia: '',
                   codigoP: '',
                   entidad: '',
                 telefonoM: '',
               nombreTutor: '',
                  telefono: '',
                 infoIncap: '',
                  lenguaIn: '',


         })
            const guardarDatos=(e)=>{
                e.preventDefault();
                console.log("Ok Save");
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )

        }

        const guardarGen = (datos) =>{
                    setDatos({
                        ...datosGen,
                        [datos.name]: datos.value
                    })
        }
          
        const  siguiente =()=>{
            console.log('Ok siguiente');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocurrio un errror validar los campos!',

              })
        } 

    return(
        <>
        <div className="contenedorG">
        <h2> Datos Generales</h2>
           <div className="mt-5">
               
               <form className="mb-5" onSubmit={e=>guardarDatos(e)}>
                <div className="row">
                   <div className="col-4">
                     <p>
                    <span>Dirección</span> - Datos de Ubicación 
                    </p>   
                   </div>
                </div>
               <div className="row">
               
                  <div className="mb-3 col-12">
                 <label for="disabledSelect" className="form-label">Domicilio completo, Municipio y Localidad</label>
                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sin calle"/>
                
                 </div>
                 </div>
                  <div className="row">
               <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Número Exterior</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sin número"/>
                    </div>
                    <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Número Interior</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sin número"/>
                    </div>
                    </div>
                    
                    <div className="row">
               <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Colonia</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sin Colonia"/>
                    </div>
                    <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Codigo Postal</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="50740"/>
                    </div>
                    </div>
                    <div className="row">
               <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Entidad/Estado de domicilio APIS</label>
                <select id="otra" className="form-select">
                <option value="sin datos">Selecione la localidad</option>
                     {  estados.map(element =>(
                          <Entidades
                                 element= {element} 
                          />
                     )) 
                     }
                    
                    </select>
                    </div>
                    <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Telefono o móvil personal</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="7121231313"/>
                    </div>
                    </div>


                  <hr></hr>
                  <div className="mb-3">
                      <h5>Ingresa los datos del Tutor</h5>
                      <div className="row">
               <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Nombre completo de madre, padre o tutor</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                    </div>
                    <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Teléfono (fijo o móvil)</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="7121231313"/>
                    </div>
                    </div>
                
                 </div> 
                 <div className="row">
               <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">Completa la sig.información : ¿Tiene alguna incapacidad por lo cual nesecites asistencia? </label>
                
                <select id="otra" className="form-select">
                    
                <option selected="true" disabled="disabled">Selecciona una Opción</option>
                    <option>Visual</option>
                    <option>Motora</option>
                    <option>Auditiva</option>
                    <option>Ningúna</option>
                    </select>
                    </div>
                    <div className="mb-3 col-6">
                <label for="disabledSelect" className="form-label">¿Hablas alguna lengua indigena?</label>
                <select id="otra" className="form-select">
                <option selected="true" disabled="disabled">Selecciona una Opción</option>
                    <option>Sí</option>
                    <option>No</option>
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

export default DatosGenerales