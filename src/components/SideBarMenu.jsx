import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'

const SideBarMenu = ({ children, showSideBar, toggleSideBar }) => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="push"
      visible={showSideBar}
      vertical
      inverted
      direction="right"
      style={{
        position: 'fixed',
        top: '10em',
      }}
    >
      <Menu.Item name="all" as={Link} to="/" onClick={toggleSideBar}>
        <span className={styles.menuItem}>All</span>
      </Menu.Item>
      <Menu.Item name="travel" as={Link} to="/travel" onClick={toggleSideBar}>
        <span className={styles.menuItem}>Travel</span>
      </Menu.Item>
      <Menu.Item
        name="development"
        as={Link}
        to="/development"
        onClick={toggleSideBar}
      >
        <span className={styles.menuItem}>Development</span>
      </Menu.Item>
      <Menu.Item name="food" as={Link} to="/food" onClick={toggleSideBar}>
        <span className={styles.menuItem}>Food</span>
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher>{children}</Sidebar.Pusher>
  </Sidebar.Pushable>
)

const styles = {
  menuItem: css`
    color: white;
    font-size: 16px;
    font-weight: 400;
    font-family: Nunito Sans;
    letter-spacing: 1px;
  `,
}

export default SideBarMenu
