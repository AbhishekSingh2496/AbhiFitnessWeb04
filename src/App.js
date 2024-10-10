 import './App.css';
import Hero from './Compoments/Hero/Hero';
import Programs from './Compoments/Programs/Programs';
import Reasons from './Compoments/Reasons/Reasons';
import Plans from './Compoments/Plans/Plans';
import Testimonils from './Compoments/Testimonials/Testimonials';
import Join from './Compoments/Join/Join';
import Footer from './Compoments/Footer/Footer'
function App() {
  return (
    <>
    <div className="App">
    <Hero/>
    <Programs/>
    <Reasons/>
    <Plans/>
    <Testimonils/>
    <Join/>
    <Footer/>
    </div>
    </>
  );
}
export default App;
