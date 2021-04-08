import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Empleados from './pages/Empleados'
import Clientes from './pages/Clientes'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Empleados}></Route>
          <Route path="/clientes" component={Clientes}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
