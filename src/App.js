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
import Cart from './components/cart';
import Login from './components/Login';

function App() {
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
