import React from 'react'
import { css } from 'react-emotion'
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
    <Header />
    <div className={styles.wrapper}>
      <h1 className={styles.header}>"BLOG"</h1>
      <div className={styles.postWrapper}>{children()}</div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

const styles = {
  header: css`
    font-family: Nunito Sans !important;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: black;
  `,
  wrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
  `,
  postWrapper: css`
    justify-content: flex-start;
    align-self: flex-start;
  `,
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
