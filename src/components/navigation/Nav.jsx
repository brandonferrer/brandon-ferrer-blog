import React from 'react';
import { Link } from 'gatsby';
import { Menu, Container } from 'semantic-ui-react';

const Nav = ({ toggleSideBar }) => (
  <Menu inverted borderless fixed="top" size="huge">
    <Container>
      <Menu.Item as={Link} to="/">
        <h1
          style={{
            color: 'white',
            fontWeight: 800,
            fontSize: '18px',
            fontFamily: 'Nunito Sans',
            letterSpacing: '1.2px',
          }}
        >
          BRANDON FERRER
        </h1>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item onClick={toggleSideBar}>
          <span
            style={{
              color: 'white',
              fontWeight: 800,
              fontSize: '16px',
              fontFamily: 'Nunito Sans',
              letterSpacing: '1.2px',
            }}
          >
            "MENU"
          </span>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
export default Nav;
