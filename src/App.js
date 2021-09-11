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
  import  Principal  from '../src/components/main/Principal';
  ///Para Menu
   import  ConvenioUaem from  '../src/components/menus/ConvenioUaem';
   import ExamenAdmision from './components/menus/ExamenAdmicion';
   import RechazoCero from './components/menus/RechazoCero'; 
   import PaseAutomatico from './components/menus/PaseAutomatico';
   ///Usuario 
   import MainUsuario from './components/usuario/MainUsuario'
   //Alta Preregistro
    import DatosCarrera from './components/preregistro/DatosCarrera';
    import DastosProcedencia from './components/preregistro/DastosProcedencia';
    import DatosGenerales  from './components/preregistro/DatosGenerales';
function App() {

  const  [pantalla,setPantalla] = useState(false)
      console.log("Variable--->",pantalla);

  return (
     <Fragment>   
     <PreguntasProvider>
      
                     <Router>
               <Switch>
               <Route exact path="/">  
               <Principal/>
               </Route>
               <Route path="/registro">
               <Registro
                    setPantalla ={setPantalla}
                    /> 
                </Route>                 
                 <Route path="/login">   
                       <Login 
                       setPantalla ={setPantalla}
                     /> 
                 </Route> 
                 <Route path="/convenioUaem">   
                       <ConvenioUaem 
                     /> 
                 </Route>
                 <Route path="/examenAdmision">   
                       <ExamenAdmision 
                     /> 
                 </Route>
                 <Route path="/RechazoCero">   
                       <RechazoCero 
                     /> 
                 </Route>
                 <Route path="/paseAutomatico">   
                       <PaseAutomatico 
                     /> 
                 </Route>
                 <Route path="/mainUsuario">
                       <MainUsuario/>
                 </Route> 
                 <Route path="/datosCarrera">
                       <DatosCarrera/>
                   </Route> 
                   <Route path="/dastosProcedencia">
                       <DastosProcedencia/>
                   </Route>
                   <Route path="/datosGenerales">
                       <DatosGenerales/>
                   </Route>                 
              </Switch> 
          </Router>
    </PreguntasProvider>
    </Fragment>  
  );
}

export default App;
