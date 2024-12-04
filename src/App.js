import logo from './logo.svg';
//import bootsrap css for stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//importing navBar for navigation between pages
import NavBar from './components/NavBar';
//importing pages
import About from './components/about';
import Home from './components/home';
import UserAddingtoCart from './components/userAddingtoCart.js';
import Login from './components/Login';
import Register from './components/register';
import Logout from './components/logout.js';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
//import UserAddingtoCart from './components/userAddingtoCart.js';
import UserGuide from './components/userGuide.js';
import Cart from './components/cart.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Register />} />
      <Route
                    path="/login"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/home" />
                        ) : (
                            <Login setIsAuthenticated={setIsAuthenticated} />
                        )
                    }
                />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path="/userAddingtoCart" element={<UserAddingtoCart/>} />
        <Route path="userGuide" element={<UserGuide/>} />
      </Routes>
    </Router>
  );
}

export default App;
