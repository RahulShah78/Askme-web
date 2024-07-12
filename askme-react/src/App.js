import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'; 
import Navbar1 from './components/Navbar/TopNav/Navbar1';
import Navbar2 from './components/Navbar/mainNAV/Nav2';
import Sliders from './components/Banner/Sliders';

  


function App() {
  return (
    <BrowserRouter>
    <Navbar1 /> 
    <Navbar2 />
    <Sliders />

    
   
   
    </BrowserRouter>
  );
}

export default App;
