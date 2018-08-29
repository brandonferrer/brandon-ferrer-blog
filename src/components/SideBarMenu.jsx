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
      <Menu.Item name="home" as={Link} to="/" onClick={toggleSideBar}>
        <span className={styles.menuItem}>Home.</span>
      </Menu.Item>
      <Menu.Item name="about" as={Link} to="/about" onClick={toggleSideBar}>
        <span className={styles.menuItem}>About-B.</span>
      </Menu.Item>
      <Menu.Item name="blog" as={Link} to="/blog" onClick={toggleSideBar}>
        <span className={styles.menuItem}>"BLOG"</span>
      </Menu.Item>
      <Menu.Item name="travel" as={Link} to="/travel" onClick={toggleSideBar}>
        <span className={styles.menuItem}>Travel.</span>
      </Menu.Item>
      <Menu.Item name="projects" as={Link} to="/projects" onClick={toggleSideBar}>
        <span className={styles.menuItem}>Dev Projects.</span>
      </Menu.Item>
      <Menu.Item name="dj-life" as={Link} to="/dj" onClick={toggleSideBar}>
        <span className={styles.menuItem}>DJ Life.</span>
      </Menu.Item>
      <Menu.Item name="say-hey" as={Link} to="/contact" onClick={toggleSideBar}>
        <span className={styles.menuItem}>Say Hey.</span>
      </Menu.Item>
      
    </Sidebar>
    <Sidebar.Pusher>{children}</Sidebar.Pusher>
  </Sidebar.Pushable>
)

const styles = {
  menuItem: css`
    color: white;
    font-size: 16px;
    font-weight: 700;
    font-family: Nunito Sans;
    letter-spacing: 1px;
  `,
}

export default SideBarMenu
