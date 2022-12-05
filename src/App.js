import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Works from './Components/Works/Works';
import {Footer}  from './Components/Footer/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Main/>
   <About/>
   <Works/>
   <Footer/>
   </>
  );
}

export default App;
