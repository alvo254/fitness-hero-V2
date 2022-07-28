// import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero/Hero"
import Plans from './components/Plans/Plans';
import Programs from "./components/Programs/Programs"
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonials/Testimonial';
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
    <Hero/>
    <Programs/>
    <Reasons/>
    <Plans/>
    <Testimonial/>
    <Join/>
    <Footer/>
    </div>
    
  );
}

export default App;
