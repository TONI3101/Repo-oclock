import logo from './logo.svg';
import './App.css';
import DigitalClock from './components/digitalClock/DigitalClock';

function App() {
  return (
    <>
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
    </div>

    <div className='clock1'>
      <DigitalClock/>
    </div>
    </>
  );
}

export default App;
