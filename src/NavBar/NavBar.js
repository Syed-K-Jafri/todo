import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = ({ history }) => {

    const routeChange = (e, route) => {
        e.preventDefault();
        history.push(route);    
    }

    return (
        <Navbar bg="success" variant="dark">
            <Navbar.Brand href="/todo">Syed-K-Jafri</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/todo" onClick={(e) => routeChange(e, '/todo')}>ToDo</Nav.Link>
                <Nav.Link href="/contact" onClick={(e) => routeChange(e, '/contact')}>Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;