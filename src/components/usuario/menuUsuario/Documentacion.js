import { Link } from "react-router-dom"

const Documentacion = () => {
        const  estadouno="estadouno"

      console.log(`hola ${estadouno}`);
    return(
       <>   
           <div className="contenedor2">
                   <h3>Documentación</h3>
                   <div className="documenta">
                        <div className="estadouno">Solicitd de Ingreso <Link to="/cargadinamica/0">  <div className="divbtn"> <button class="btn btn-outline-dark">Agregar</button> </div></Link></div>
                        <div className="estadouno">Constacia de estudios<Link to="/cargadinamica/1" className="opUser"> <div className="divbtn"> <button class="btn btn-outline-dark">Agregar</button> </div>  </Link></div>
                        <div className="estadouno">Acta de nacimiento<Link to="/cargadinamica/2" className="opUser"> <div className="divbtn"> <button class="btn btn-outline-dark">Agregar</button> </div> </Link></div>
                        <div className="estadouno">Curp<Link to="/cargadinamica/3" className="opUser"> <div className="divbtn"> <button class="btn btn-outline-dark">Agregar</button> </div> </Link></div>
                        <div className="estadouno">Comprobante Domicialario <Link to="/cargadinamica/4" className="opUser"> <div className="divbtn"> <button class="btn btn-outline-dark">Agregar</button> </div>  </Link> </div>
                        <div className="estadouno">Formato universal <Link to="/cargadinamica/5" className="opUser"> <div className="divbtn"> <button class="btn btn-outline-dark">Agregar</button> </div>  </Link> </div>
                        <div className="estadouno">Comporbante de Pago <Link to="/cargadinamica/6" className="opUser"> <div className="divbtn"> <button class="btn btn-outline-dark">Agregar</button> </div> </Link></div>
                   </div>
           </div>
    </>
    )
   }

export default Documentacion