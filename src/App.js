import './css/App.css';
import Home from './Components/Home/HomeBox';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Checkout from './Components/Checkout/CheckoutBox';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
