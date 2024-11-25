import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">JA Plugs</Navbar.Brand>
                <Nav className="navbar">
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;