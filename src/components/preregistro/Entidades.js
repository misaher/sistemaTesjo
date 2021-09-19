const Entidades = ({element}) => {
        console.log(element);
    return(
         <>
             <option value={element.clave}>{element.nombre}</option>
         </>
    )
}

export default Entidades