import './App.css';
import QRScanner from './components/Home';
import MatchScanner from './components/MatchScan';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Home from './components/Home';


function App() {
  return (
    // <div className="App">
    //   {/* <Home/> */}
    //   <QRScanner/>
    //   {/* <MatchScanner/> */}
    // </div>
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<QRScanner />} />
          <Route exact path="/match" element={<MatchScanner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
