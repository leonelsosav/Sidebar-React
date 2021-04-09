import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Home2 from './pages/Home2'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home2" component={Home2}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
