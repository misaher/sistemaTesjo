import React,{useState,useEffect} from 'react';
import PreguntasContext from  './PreguntasContext';

const PreguntasProvider = (props) =>{
        let ok = "Hola"

  return(
     <PreguntasContext.Provider
       velue={{
        ok
       }}
     >
          {props.children}   
     </PreguntasContext.Provider>

  )

}

export default PreguntasProvider;