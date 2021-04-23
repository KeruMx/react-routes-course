import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';

import Loadable from 'react-loadable';
const Loader = x => Loadable({
  loading: () =>'Cargando...',
  loader: x
})
const Prueba = Loader(()=>import('./Componentes/Prueba'))
const Invoices = Loader(()=>import('./Componentes/Invoices'))
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Prueba} />
          <Route exact path="/invoices" render={()=> <Invoices/>} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
