import logo from './logo.svg';
import './App.css';
import Period from'./component/period'
import OpeningPage from './component/page/openingPage'
import Calendar from 'react-calendar';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import About from './component/page/about';
import Reduce from './component/page/increase';

function App() {
  return (
    <div className="App">
      {/* <Reduce/> */}
      <Router>
        <Routes>
          <Route path='/' element={<OpeningPage/>}/>
      <Route path='/start' element={<Period/>}/>
      <Route path='/About' element={<About/>}/>
      </Routes>
      </Router>
      {/* <Calendar/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
