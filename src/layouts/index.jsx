import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { css } from 'react-emotion'
import { Container } from 'semantic-ui-react'
import SideBarMenu from './components/SideBarMenu'
import Nav from './components/Nav'
import 'semantic-ui-css/semantic.min.css'
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
      <div>
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
            <div
              className={css`
                padding: 4rem 0;
                height: 98vh;
              `}
            >
              {children({ ...this.props })}
            </div>
          </Container>
        </SideBarMenu>
      </div>
    )
  }
}

export default App

export const getAllPost = graphql`
  query getAllPost {
    allWordpressPost {
      edges {
        node {
          id
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          excerpt
          content
          categories {
            id
            name
          }
        }
      }
    }
  }
`
