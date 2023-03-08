import React, {useContext} from 'react'
import { 
  BrowserRouter as 
  Router, 
  Routes, 
  Route,
  Navigate
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Login from './pages/Login'
import Dashbord from './pages/Dashbord'
import GetsaoUser from './pages/GetsaoUser'
import Moradores from './pages/GetsaoUser/Moradores'
import Porteiros from './pages/GetsaoUser/Porteiros'
import Estatistica from './pages/Estatistica'
import Area from './pages/Area'
import Apartamento from './pages/Area/Apartamento'
import Tipologia from './pages/Area/Tipologia'
import Servico from './pages/Area/Servico'
import Perfil from './pages/Perfil'


export const AppRoutes = () => {
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext);
    if(loading){
      return <>Carrengando pagina</>
    }
    if(!authenticated) {
      return <Navigate to="/login"/>
    }
    return children;
  }
  return <Router>
  <AuthProvider>
  <Routes>
    <Route path="/login" exact element={<Login/>}/>
    <Route path="/" exact element={<Private><Dashbord/></Private>}/>
    <Route path="/adms" exact element={<Private><GetsaoUser/></Private>}/>
    <Route path="/moradores" exact element={<Private><Moradores/></Private>}/>
    <Route path="/porteiros" exact element={<Private><Porteiros/></Private>}/>
    <Route path="/estatistica" exact element={<Private><Estatistica/></Private>}/>
    <Route path="/area" exact element={<Private><Area/></Private>}/>
    <Route path="/apartamento" exact element={<Private><Apartamento/></Private>}/>
    <Route path="/tipologia" exact element={<Private><Tipologia/></Private>}/>
    <Route path="/servico" exact element={<Private><Servico/></Private>}/>
    <Route path="/perfil" exact element={<Private><Perfil/></Private>}/>
  </Routes>
  </AuthProvider>
</Router>
}