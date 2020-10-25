import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const NavBar = ({ history }) => {

    const routeChange = (e, route) => {
        e.preventDefault();
        history.push(route);    
    }

    return (
        <Navbar bg="success" variant="dark">
            <Navbar.Brand href="/todo">Syed-K-Jafri</Navbar.Brand>
            <Nav className="custom-width" style={{ justifyContent: 'flex-end'}}>
                <Nav.Link href="/todo" onClick={(e) => routeChange(e, '/todo')}><b>ToDo</b></Nav.Link>
                <Nav.Link href="/contact" onClick={(e) => routeChange(e, '/contact')}><b>Contact</b></Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default withRouter(NavBar);