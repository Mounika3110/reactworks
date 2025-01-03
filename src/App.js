import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { CartProvider } from './Components/Cart/Cartcontext';
import CartPage from './Components/Cart/Cartpage';
import ForgetPassword from './Components/ForgetPassword';
import Login from './Components/Login';
import Dashboard from './Components/Module/Dashboard';
import Headdetails from './Components/Module/Details/Headdetails';
import Speakerdetails from './Components/Module/Details/Speakerdetails';
import Tvdetails from './Components/Module/Details/Tvdetails';
import Headphones from './Components/Module/Headphones';
import Speakers from './Components/Module/Speakers';
import Tv from './Components/Module/Tv';
import Signup from './Components/Signup';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/reactworks" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/headphone" element={<Headphones />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/:brand" element={<Tv />} />
            <Route path="/tvdetails/:id" element={<Tvdetails />} />
            <Route path="/:head" element={<Headphones />} />
            <Route path="/headdetails/:id" element={<Headdetails />} />
            <Route path="/:speak" element={<Headphones />} />
            <Route path="/speakdetails/:id" element={<Speakerdetails />} />
            <Route path="/cartpage" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
