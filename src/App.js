import './App.css';
import './assets/bootstrap/css/bootstrap.min.css'
import Login from './components/Login';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SignUp from './components/SignUp';




function App() {
  return (

    <Router>

    <Switch>
    
    <Route exact path='/signup'> <SignUp /> </Route>
    <Route exact path='/'> <h1>Hello</h1> </Route>
    <Route exact path='/signin'> <Login /> </Route>
    </Switch>


    </Router>
  );
}

export default App;
