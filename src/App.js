import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Empleados from './pages/Empleados'
import Clientes from './pages/Clientes'
import Productos from './pages/Productos'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Empleados}></Route>
          <Route path="/clientes" component={Clientes}></Route>
          <Route path="/productos" component={Productos}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
