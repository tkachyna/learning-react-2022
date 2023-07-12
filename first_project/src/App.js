import './App.css';
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
            <div class="columnleft"/>
            <div class="column">2
            <Info />
            <About />
            <Interests />
            <Footer />
            </div>
            <div class="columnright"/>
      
    </div>
  );
}

export default App;
