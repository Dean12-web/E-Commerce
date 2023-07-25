import './css/App.css';
import Home from './Components/Home/HomeBox';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Checkout from './Components/Checkout/CheckoutBox';
import LoginBox from './Components/Login/LoginBox';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<LoginBox />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
