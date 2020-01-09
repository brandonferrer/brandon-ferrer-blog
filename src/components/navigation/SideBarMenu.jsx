import React from 'react'
import Link from 'gatsby-link'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'
// import { isMobileOnly } from 'react-device-detect'

const SideBarMenu = ({ children, showSideBar, toggleSideBar }) => {
  let sidebarAnimation
  // if (isMobileOnly) {
  //   sidebarAnimation = 'push'
  // } else {
  //   sidebarAnimation = 'scale down'
  // }
  sidebarAnimation = 'scale down'
  return (
    <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
      <Sidebar
        as={Menu}
        animation={sidebarAnimation}
        visible={showSideBar}
        vertical
        inverted
        direction="right"
        style={{
          position: 'fixed',
          bottom: 0,
          top: '10rem',
        }}
      >
        <Menu.Item name="home" as={Link} to="/" onClick={toggleSideBar}>
          <span css={styles.menuItem}>Home.</span>
        </Menu.Item>
        <Menu.Item
          disabled
          // name="about"
          // as={Link}
          // to="/about"
          // onClick={toggleSideBar}
        >
          <span css={[styles.menuItem, styles.disabled]}>About B.</span>
        </Menu.Item>
        <Menu.Item name="blog" as={Link} to="/blog" onClick={toggleSideBar}>
          <span css={styles.menuItem}>"BLOG"</span>
        </Menu.Item>
        <Menu.Item name="travel" as={Link} to="/travel" onClick={toggleSideBar}>
          <span css={styles.menuItem}>Travel.</span>
        </Menu.Item>
        <Menu.Item
          name="lifestyle"
          as={Link}
          to="/lifestyle"
          onClick={toggleSideBar}
        >
          <span css={styles.menuItem}>Lifestyle.</span>
        </Menu.Item>
        <Menu.Item
          name="projects"
          as={Link}
          to="/projects"
          onClick={toggleSideBar}
        >
          <span css={styles.menuItem}>Dev Projects.</span>
        </Menu.Item>
        <Menu.Item
          disabled
          // name="dj-life"
          // as={Link}
          // // to="/dj"
          // onClick={toggleSideBar}
        >
          <span css={[styles.menuItem, styles.disabled]}>DJ Life.</span>
        </Menu.Item>
        <Menu.Item
          disabled
          // name="say-hey"
          // as={Link}
          // // to="/contact"
          // onClick={toggleSideBar}
        >
          <span css={[styles.menuItem, styles.disabled]}>Say Hey.</span>
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher css={styles.bgYellow}>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SideBarMenu

const styles = {
  menuItem: css`
    color: white;
    font-size: 16px;
    font-weight: 700;
    font-family: Nunito Sans;
    letter-spacing: 1px;
  `,
  disabled: css`
    color: #666666;
  `,
  bgYellow: css`
    background-color: #ffeb3b !important;
  `,
}
