import React from 'react';
import {Link} from 'wouter';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export function SiteNavigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Link to="/dashboard">
            <Nav.Link>
              <i className="fas fa-home mr-2" />
              Dashboard
            </Nav.Link>
          </Link>
          <NavDropdown title={<><i className="fas fa-laptop mr-2" /> Site</>}>
            <Link to="/site/settings">
              <NavDropdown.Item>Edit Settings</NavDropdown.Item>
            </Link>
            <Link to="/articles/list">
              <NavDropdown.Item>News Articles</NavDropdown.Item>
            </Link>
          </NavDropdown>
          <NavDropdown title={<><i className="fas fa-users mr-2" /> Users</>}>
            <Link to="/users/list">
              <NavDropdown.Item>Users</NavDropdown.Item>
            </Link>
            <Link to="/ranks/list">
              <NavDropdown.Item>Ranks</NavDropdown.Item>
            </Link>
            <Link to="/bans/list">
              <NavDropdown.Item>Bans</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}
