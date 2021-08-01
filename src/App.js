import React,{Fragment,useEffect,useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PreguntasProvider from '../src/context/preguntas/PreguntasProvider';
import UsuarioProvider from '../src/context/usuario/UsuarioProvider';
 ///Componenetes
  import Login  from  '../src/components/auth/Login';
  import Registro  from   '../src/components/auth/Registro';
    
function App() {

  const  [pantalla,setPantalla] = useState(false)
      console.log("Variable--->",pantalla);

  return (
     <Fragment>   
     <PreguntasProvider>
      
                     <Router>
              <Switch>
              <Route exact path="/">
              {pantalla ?
                    <Registro
                    setPantalla ={setPantalla}
                    />                    
                       :
                       <Login 
                       setPantalla ={setPantalla}
                     /> }
               </Route>
                 
              </Switch> 
          </Router>
    </PreguntasProvider>
    </Fragment>  
  );
}

export default App;
