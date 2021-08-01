import React,{useContext,useEffect,useState} from 'react';
import  UsuarioContext from './UsuarioContext';
const UsuarioProvider= (props) =>{
      /// Definicion de datos a pasar por toda la pagina
       //// tambien se puede pasar metodos :)
        const [usuario,setUsuario] = useState(true);
         
       

     
        <UsuarioContext.Provider
          value={{
            usuario

          }}
      >
             {props.children}

      </UsuarioContext.Provider>

}

export default UsuarioProvider;