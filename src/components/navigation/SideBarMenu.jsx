import React from 'react';
import Link from 'gatsby-link';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
// import { isMobileOnly } from 'react-device-detect'

const SideBarMenu = ({ children, showSideBar, toggleSideBar }) => {
  let sidebarAnimation;
  // if (isMobileOnly) {
  //   sidebarAnimation = 'push'
  // } else {
  //   sidebarAnimation = 'scale down'
  // }
  sidebarAnimation = 'scale down';
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
        {navConfig.map(
          navItem =>
            !navItem.isDisabled && (
              <Menu.Item
                key={navItem.name}
                name={navItem.name}
                as={Link}
                to={navItem.path}
                onClick={toggleSideBar}
              >
                <span css={styles.menuItem}>{navItem.label}</span>
              </Menu.Item>
            )
        )}
      </Sidebar>
      <Sidebar.Pusher css={styles.bgRed}>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default SideBarMenu;

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
  bgRed: css`
    background-color: #f44336 !important;
  `,
};

const navConfig = [
  { name: 'home', label: 'Home.', path: '/', isDisabled: false },
  { name: 'about', label: 'About B.', path: '/about', isDisabled: true },
  { name: 'blog', label: 'Blog.', path: '/blog', isDisabled: false },
  {
    name: 'instagram',
    label: 'Instagram.',
    path: '/instagram',
    isDisabled: false,
  },
  {
    name: 'worldtour',
    label: 'World Tour.',
    path: '/worldtour',
    isDisabled: false,
  },
  { name: 'dj', label: 'Spotify Slapzz.', path: '/dj', isDisabled: true },
  {
    name: 'projects',
    label: 'Dev Projects.',
    path: '/projects',
    isDisabled: false,
  },
  { name: 'resume', label: 'Resume.', path: '/resume', isDisabled: false },
  { name: 'contact', label: 'Say Hey.', path: '/contact', isDisabled: false },
];
