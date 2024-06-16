import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import './App.css';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <NavbarComponent/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
