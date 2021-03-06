import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/proyectoState'
import TareasState from './context/tareas/TareasState';

function App() {
  return (
    <ProyectoState>
      <TareasState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/proyectos" component={Proyectos} />
          </Switch>
        </Router>
      </TareasState>
    </ProyectoState>
  );
}

export default App;
