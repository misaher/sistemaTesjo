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
    ///para usuario 
    import Perfil   from './components/usuario/menuUsuario/Perfil';
    import Documentacion from './components/usuario/menuUsuario/Documentacion';
    import CargaDinamica  from './components/usuario/menuUsuario/CargaDinamica';
function App() {

  const  [pantalla,setPantalla] = useState(true)
      console.log("Variable--->",pantalla);

  return (
     <Fragment>   
     <PreguntasProvider>
         
       
                     <Router>
                   { pantalla? <MainUsuario/>: null }
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
                   <Route path="/perfil">
                       <Perfil/>
                   </Route> 
                   <Route path="/documentacion">
                       <Documentacion/>
                   </Route>
                   <Route path="/cargadinamica/:tipo">
                      <CargaDinamica/>
                   </Route>
                                  
              </Switch> 
          </Router>
    </PreguntasProvider>
    </Fragment>  
  );
}

export default App;
