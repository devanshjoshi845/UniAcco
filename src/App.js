
import './App.css';
import Footer from './components/Footer';
import Lastsection from './components/Lastsection';
import Midsection from './components/Midsection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Midsection/>
    <Lastsection/>
    <Footer/>
    </div>
  );
}

export default App;
