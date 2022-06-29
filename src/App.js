import './assets/bootstrap/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import CodeSchool from './Components/CodeSchool';
import Cogitans from './Components/Cogitans';
import Electrotech from './Components/Electrotech';
import Infox from './Components/Infox';
import About from './Components/About';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import GDSC from './Components/GDSC';
import Ecell from './Components/Ecell';
import Idroid from './Components/Idroid';
import Turing from './Components/TuringAI';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path='/'><Home/></Route>
    <Route exact path='/codeschool'><CodeSchool/></Route>
    <Route exact path='/ecell'><Ecell/></Route>
    <Route exact path='/cogitans'><Cogitans/></Route>
    <Route exact path='/electrotech'><Electrotech/></Route>
    <Route exact path='/turing'><Turing/></Route>
    <Route exact path='/idroid'><Idroid/></Route>
    <Route exact path='/gdsc'><GDSC/></Route>
    <Route exact path='/infox'><Infox/></Route>
    <Route exact path='/about'><About/></Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
