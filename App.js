import {BrowserRouter, Route, Switch} from "react-router-dom";
import IndexClientes from "./components/clientes/IndexClientes";
import ClienteShow from "./components/clientes/ClienteShow";
import Menu from "./components/Menu";
import IndexComidas from './components/comidas/IndexComidas'
import ComidaShow from "./components/comidas/ComidaShow";
import ClienteCreate from "./components/clientes/ClienteCreate";

import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path='/clientes/crear' component={ClienteCreate}/>
                <Route exact path='/clientes' component={IndexClientes}/>
                <Route exact path='/clientes/:id' component={ClienteShow}/>
                <Route exact path='/comidas' component={IndexComidas}/>
                <Route exact path='/comidas/:id' component={ComidaShow}/>
                <Route exact path='/' component={Menu}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
