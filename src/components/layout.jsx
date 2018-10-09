import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
// Note: Gatsby V1 to V2 migration attempt. Now using StaticQuery in blog.jsx
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

// Note: Gatsby V1 to V2 migration attempt. Now using StaticQuery in blog.jsx

// <StaticQuery
//   query={graphql`
//     {
//       allWordpressPost {
//         edges {
//           node {
//             id
//             date(formatString: "MMMM DD, YYYY")
//             slug
//             title
//             excerpt
//             content
//             categories {
//               id
//               name
//             }
//           }
//         }
//       }
//     }
//   `}
//   render={data => (
//     <>
//       <Helmet
//         title="brandonferrer.com"
//         meta={[
//           {
//             name: 'description',
//             content:
//               "Hey, my name is Brandon. I'm a developer, tourist, foodie, disc jockey, and blogger.",
//           },
//           {
//             name: 'keywords',
//             content:
//               'Web Development, Software Engineering, Food, Foodie, Dj, Travel, Tourism, Lifestyle, Blog',
//           },
//         ]}
//       />
//       <Nav toggleSideBar={this.toggleSideBar} />
//       <SideBarMenu
//         showSideBar={showSideBar}
//         toggleSideBar={this.toggleSideBar}
//       >
//         <Container>
//           <div style={{ padding: '4rem 0', height: '98vh' }}>
//             {children({ ...this.props })}
//           </div>
//         </Container>
//       </SideBarMenu>
//     </>
//   )}
// />

// export const getAllPost = graphql`
//   query getAllPost {
//     allWordpressPost {
//       edges {
//         node {
//           id
//           date(formatString: "MMMM DD, YYYY")
//           slug
//           title
//           excerpt
//           content
//           categories {
//             id
//             name
//           }
//         }
//       }
//     }
//   }
// `
