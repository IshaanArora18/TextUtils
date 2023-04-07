import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const [greenMode,setGreenMode]=useState('green');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(()=>{
         setAlert(null);
       },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
       setmode('dark');
       document.body.style.backgroundColor='#042743';
       showAlert("Dark mode has been enabled!","success");
       document.title='TextUtils --Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled!","success");
      document.title='TextUtils --Light Mode';
    }
  }
  const toggleGreen=()=>{
    if(greenMode==='blue'){
      setGreenMode('green');
      document.body.style.backgroundColor='green';
      showAlert("Green mode has been enabled!","success");
   }
   else{
     setGreenMode('blue');
     document.body.style.backgroundColor='blue';
     showAlert("Blue mode has been enabled!","success");
   }
  }
  return (
 
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen} greenMode={greenMode}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
      
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/> }/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}/>
        
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
