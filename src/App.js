import './assets/bootstrap/css/bootstrap.min.css'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';



function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path='/'><Home/></Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
