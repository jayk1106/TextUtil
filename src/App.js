import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode , setMode ] = useState('light');

  const [color , setColor] = useState(null);

  const [alert, setAlert] = useState(null);


  const showAlert = (msg , type) => {
    setAlert({
      msg : msg,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);
    } , 1500)
  }


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3c3f42';
      

      if(color === 'red') document.body.style.backgroundColor = '#631919';
      else if(color === 'blue') document.body.style.backgroundColor = '#042647';
      else if(color === 'green') document.body.style.backgroundColor = '#143b18';

      showAlert("Dark Mode Enabled" , "success");

    }else{
      setMode('light');
      document.body.style.backgroundColor = '#f2f2f2';
      

      if(color === 'red') document.body.style.backgroundColor = '#631919';
      else if(color === 'blue') document.body.style.backgroundColor = '#042647';
      else if(color === 'green') document.body.style.backgroundColor = '#143b18';

      showAlert("Light Mode Enabled" , "success");

      // document.title = "TextUtil - Light Mode"  // you can change title anytime with this code
    }
  }

  const setGreenColor = ()=> {
    setColor('green');
    document.body.style.backgroundColor = '#143b18';
    showAlert("Green Mode Enabled" , "success");
  }

  const setBlueColor = ()=> {
    setColor('blue');
    document.body.style.backgroundColor = '#042647';
    showAlert("Blue Mode Enabled" , "success");
  }

  const setRedColor = ()=> {
    setColor('red');
    document.body.style.backgroundColor = '#631919';
    showAlert("Red Mode Enabled" , "success");
  }



  return (
    <>
      <Router>
        <Navbar title="TextUtil" navItem1="Home" navItem2="About Us" mode={mode} toggleMode={toggleMode} setBlueColor={setBlueColor} setRedColor={setRedColor} setGreenColor={setGreenColor}  />
        
        <div className="container my-3"> 
        <Alerts alert={alert}/>
        <Routes>
          <Route path="/about" element={ <About mode={mode} color={color}  /> }/>

          <Route path="/" element={ <TextForm title="Enter Some Text Here" mode={mode} showAlert={showAlert} color={color} /> } />
            
        </Routes>
        </div>
      </Router>
      
    </> 
  );
}

export default App;
