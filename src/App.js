import './assets/bootstrap/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Club from './Components/Club';
import Infox from './Components/Infox';
import About from './Components/About';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path='/'><Home/></Route>
    <Route exact path='/club'><Club/></Route>
    <Route exact path='/infox'><Infox/></Route>
    <Route exact path='/about'><About/></Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
