import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import Nav from './navigation/Nav';
import SideBarMenu from './navigation/SideBarMenu';
import { FlexWrapper } from '../shared/wrappers';

import '../../semantic/dist/semantic.min.css';
import './index.css';

const App = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => setShowSideBar(prevState => !prevState);

  return (
    <>
      <Helmet title="brandonferrer.com" meta={headerMetaData}>
        <script src="https://sdk.scdn.co/spotify-player.js" />
      </Helmet>
      <Nav toggleSideBar={toggleSideBar} />
      <SideBarMenu showSideBar={showSideBar} toggleSideBar={toggleSideBar}>
        <Container>
          <FlexWrapper>{children}</FlexWrapper>
        </Container>
      </SideBarMenu>
    </>
  );
};

export default App;

const headerMetaData = [
  {
    name: 'viewport',
    content:
      'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0',
  },
  {
    name: 'description',
    content:
      "Hey, my name is Brandon. I'm a developer, tourist, foodie, disc jockey, and vlogger.",
  },
  {
    name: 'keywords',
    content:
      'Brandon, Brandon Ferrer, brandonferrer, Web Development, Software Engineering, Food, Foodie, Dj, Travel, Tourism, Lifestyle, Blog, Vlog',
  },
];
