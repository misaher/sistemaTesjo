import ReactFileReader from 'react-file-reader';
import {useState} from 'react';
import Verpdf  from './Verpdf';
import {
      useParams

}  from 'react-router-dom';
const CargaDinamica = () => {
      const  [datos,setDatos] = useState();
       let {tipo} = useParams();   
        let diccionario =["Solicitd de Ingreso","Constacia de estudios","Acta de nacimiento","Curp","Comprobante domiciliario","Formato Universal","Comprobante de pago"];
          
        const  handleFiles = files => {
            console.log('Ok carga de archivos ');
             console.log(files)
             var reader = new FileReader();
             reader.onload =  (e) => {
                // Use reader.result
                 console.log(reader.result)
                  setDatos(
                   reader.result
                )
              }
              reader.readAsText(files[0]);   
          }
  
          
    return(
         <>
              <div className="contenedor2" >  
                  <h3> Carga de {diccionario[tipo]} </h3>
                <div>
                <ReactFileReader 
                  multipleFiles={false}
                  fileTypes={[".pdf"]} 
                handleFiles={handleFiles}>
                      <button type="button" className="btn btn-info">Cargar Archivo</button>
                </ReactFileReader>
                <div>
                   
                </div> 
               </div>

              </div>
             
         </>
    )
    }

export default CargaDinamica