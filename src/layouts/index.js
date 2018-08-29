import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { css } from 'react-emotion'
import { Container } from 'semantic-ui-react'
import SideBarMenu from '../components/SideBarMenu'
import Nav from '../components/Nav'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

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
    return (
      <div>
        <Helmet
          title="brandonferrer.com"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Nav toggleSideBar={this.toggleSideBar} />
        <SideBarMenu
          showSideBar={showSideBar}
          toggleSideBar={this.toggleSideBar}
        >
          <Container>
            <div className={styles.wrapper}>
              <h1 className={styles.header}>"BLOG"</h1>
              <div className={styles.postWrapper}>{children()}</div>
            </div>
          </Container>
        </SideBarMenu>
      </div>
    )
  }
}

const styles = {
  header: css`
    font-family: Nunito Sans !important;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: black;
    padding-top: 3rem;
  `,
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;
    height: 98vh;
  `,
  postWrapper: css`
    justify-content: flex-start;
    align-self: flex-start;
  `,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default App
