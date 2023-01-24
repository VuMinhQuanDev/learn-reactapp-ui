import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
import '../../assets/scss/header.scss'
const Header = () => {
    return (
        <Navbar className="navbar-header_container" bg="light" expand="lg">
            <Container>
                <NavLink to="/" className='navbar-brand'>Vũ Minh Quân</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link' >Home</NavLink>
                        <NavLink to='/users' className='nav-link' >User</NavLink>
                        <NavLink to='/admin' className='nav-link' >Admin</NavLink>
                    </Nav>
                    <Nav>
                        <button className='btn-login' >Log in</button>
                        <button className='btn-signup' >Sign up</button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavLink to="/login" className='dropdown-item'>Log in</NavLink>
                            <NavLink to="/logout" className='dropdown-item'>Log out</NavLink>
                            <NavLink to="/profile" className='dropdown-item'>Profile</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to='/porfolio' className='dropdown-item'>Porfolio</NavLink>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;