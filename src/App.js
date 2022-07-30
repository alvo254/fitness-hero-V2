import './App.css';
import Hero from "./components/Hero/Hero"
import Plans from './components/Plans/Plans';
import Programs from "./components/Programs/Programs"
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonials/Testimonial';
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (


    <div className='App'>
      <BrowserRouter>
      {/* <Link to='/'>{<Hero/>}</Link> */}
      <nav className='header'>
        <ul className="header-list">
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/reasons">why us</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/Testimonial">Testimonial</Link>
        <Link to="/Join">Join</Link>
        </ul>
      </nav>
      
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/Programs' element={<Programs/>}/>
        <Route path='/reasons' element={<Reasons/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='footer' element={<Footer/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      </BrowserRouter>


    </div>

    
  );
}

export default App;
