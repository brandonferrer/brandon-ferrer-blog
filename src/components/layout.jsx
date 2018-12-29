import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
import '../../semantic/dist/semantic.min.css'
import SideBarMenu from './navigation/SideBarMenu'
import Nav from './navigation/Nav'
import FlexWrapper from './wrappers/FlexWrapper'
import './index.css'

class App extends Component {
  state = {
    showSideBar: false,
  }
  toggleSideBar = () =>
    this.setState({
      showSideBar: !this.state.showSideBar,
    })

  render() {
    const { showSideBar } = this.state
    const { children } = this.props

    return (
      <>
        <Helmet
          title="brandonferrer.com"
          meta={[
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
          ]}
        />
        <Nav toggleSideBar={this.toggleSideBar} />
        <SideBarMenu
          showSideBar={showSideBar}
          toggleSideBar={this.toggleSideBar}
        >
          <Container>
            <FlexWrapper>{children}</FlexWrapper>
          </Container>
        </SideBarMenu>
      </>
    )
  }
}

export default App
