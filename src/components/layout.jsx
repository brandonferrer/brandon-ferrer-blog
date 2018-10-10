import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import SideBarMenu from './SideBarMenu'
import Nav from './Nav'
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
              name: 'description',
              content:
                "Hey, my name is Brandon. I'm a developer, tourist, foodie, disc jockey, and blogger.",
            },
            {
              name: 'keywords',
              content:
                'Web Development, Software Engineering, Food, Foodie, Dj, Travel, Tourism, Lifestyle, Blog',
            },
          ]}
        />
        <Nav toggleSideBar={this.toggleSideBar} />
        <SideBarMenu
          showSideBar={showSideBar}
          toggleSideBar={this.toggleSideBar}
        >
          <Container>
            <div style={{ padding: '4rem 0', height: '98vh' }}>{children}</div>
          </Container>
        </SideBarMenu>
      </>
    )
  }
}

export default App
