import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const NavBar = ({ isAuthenticated }) => {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                {/* Back Button  
                    onClick={() => navigate(-1)} takes the user back to the previous page*/}
                <button onClick={() => navigate(-1)} className="backbtn">Back</button>
                <Navbar.Brand onClick={() => navigate("/home")}
                 style={{ cursor: "pointer", color: "white" }}
                    >JA Plugs</Navbar.Brand>
                <Nav className="navbar">
                    <Nav.Link href="/Cart">Cart</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                    <Nav.Link href="/userAddingtoCart">UserAddingToCart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
