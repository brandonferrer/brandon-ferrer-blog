import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { css } from 'react-emotion'
import { Container } from 'semantic-ui-react'
import SideBarMenu from '../components/SideBarMenu'
import Nav from '../components/Nav'
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
    const { children, data } = this.props
    console.log('data from wp', data)

    return (
      <div>
        <Helmet
          title="brandonferrer.com"
          meta={[
            {
              name: 'description',
              content:
                "My name is Brandon, and I'm a web developer, dj, foodie, and tourist. This is my blog.",
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
            <div className={styles.wrapper}>
              <div className={styles.postWrapper}>{children()}</div>
            </div>
          </Container>
        </SideBarMenu>
      </div>
    )
  }
}

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem 0;
    height: 98vh;
  `,
  postWrapper: css`
    justify-content: flex-start;
    align-self: flex-start;
    width: 100%;
    height: 100%;
  `,
}

export const getAllPost = graphql`
query getAllPost {
  allWordpressPost {
    edges {
      node {
        id
        slug
        title
        date
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

export default App
