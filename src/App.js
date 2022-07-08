import './assets/bootstrap/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import CodeSchool from './Components/CodeSchool';
import Cogitans from './Components/Cogitans';
import Electrotech from './Components/Electrotech';
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
import { useState } from 'react';
import { useEffect } from 'react';



function App() {

  const [mode, setMode] = useState('light')

  // const modeController = () => {
  //   if (mode === 'dark') {
  //     setMode('light');
  //     document.getElementById('root').style.backgroundColor = '#000 !important;';
  //     document.getElementById('root').style.color = 'white;';
  //   }
  //   else {
  //     setMode('dark');
  //     document.getElementById('root').style.backgroundColor = '#fff !important;';
  //     document.getElementById('root').style.color = 'black;';
  //   }

  // }

  // const [mode, setMode] = useState('light');

  // const [buttonMode, setbuttonMode] = useState('-');


  const toggleMode = () => {

    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.getElementById('root').style.backgroundColor = 'white';
      document.getElementById('root').style.color = 'black';
      document.getElementById('mainNav').style.backgroundColor = 'white';
      document.getElementById('mainNav').style.borderColor = 'rgba(45,45,45,.1)';
      document.getElementById("theme").src = require("./Components/Images/sun.png");
      document.getElementById('team').style.backgroundColor = 'white';
      document.getElementById('team').style.color = 'black';
    }

    else {
      setMode('dark')
      document.body.style.backgroundColor = "black"
      document.getElementById('root').style.backgroundColor = 'black';
      document.getElementById('mainNav').style.backgroundColor = 'black';
      document.getElementById('root').style.color = 'white';
      document.getElementById('mainNav').style.borderColor = '#ffffff2e';
      document.getElementById("theme").src = require("./Components/Images/moon-icon.png")
      document.body.style.color = "white"
      document.getElementById('team').style.backgroundColor = 'black';
      document.getElementById('team').style.color = 'white';

    }
    console.log(mode);


  }

  const sudoMode = async ()=>{
    document.body.style.backgroundColor = "black"
    document.getElementById('root').style.backgroundColor = 'black';
    document.getElementById('mainNav').style.backgroundColor = 'black';
    document.getElementById('root').style.color = 'white';
    document.getElementById('mainNav').style.borderColor = '#ffffff2e';
    document.getElementById("theme").src = require("./Components/Images/moon-icon.png")
    document.body.style.color = "white"
    document.getElementById('team').style.backgroundColor = 'black';
    document.getElementById('team').style.color = 'white';
  }





  return (
    <Router>
      <Navbar modeController={toggleMode} mode={mode} />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/codeschool'><CodeSchool /></Route>
        <Route exact path='/ecell'><Ecell /></Route>
        <Route exact path='/cogitans'><Cogitans /></Route>
        <Route exact path='/electrotech'><Electrotech /></Route>
        <Route exact path='/turing'><Turing /></Route>
        <Route exact path='/idroid'><Idroid /></Route>
        <Route exact path='/gdsc'><GDSC /></Route>
        <Route exact path='/about'><About sudoMode={sudoMode} mode={mode} /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
