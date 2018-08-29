import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// import React from 'react'

// export default ({ data }) => {
//   console.log(data)
//   return (
//     <div>
//       <h1>My WordPress Blog</h1>
//       <h4>Posts</h4>
//       {data.allWordpressPost.edges.map(({ node }) => (
//         <div>
//           <p>{node.title}</p>
//           <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
//         </div>
//       ))}
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query MyFiles {
//     allWordpressPost(sort: { fields: [date] }) {
//       edges {
//         node {
//           title
//           excerpt
//           slug
//         }
//       }
//     }
//   }
// `
