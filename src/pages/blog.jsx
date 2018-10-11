import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'
import { Item, Dropdown } from 'semantic-ui-react'
import { PageHeader, OverflowWrapper, BlogItem } from '../components'
import Layout from '../components/layout'

class Blog extends Component {
  state = {
    category: 'All',
  }

  handleDropdownChange = (event, { value }) =>
    this.setState({ category: value })

  render() {
    const { data } = this.props
    const { category } = this.state
    const blogPostArray = data.allWordpressPost.edges

    let passedData

    switch (category) {
      case 'Engineering':
        passedData = blogPostArray.filter(
          post => post.node.categories[0].name === catEnum.ENGINEERING
        )
        break
      case 'Travel':
        passedData = blogPostArray.filter(
          post => post.node.categories[0].name === catEnum.TRAVEL
        )
        break
      default:
        passedData = blogPostArray
    }

    return (
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.headerWrapper}>
            <PageHeader text="Blog" inQuotes />
            <Dropdown
              placeholder="Filter Categories"
              search
              fluid
              selection
              options={categoryOptions}
              value={category}
              onChange={this.handleDropdownChange}
            />
          </div>
          <OverflowWrapper blog>
            <div className={styles.contentWrapper}>
              <Item.Group divided>
                {data &&
                  passedData.map(({ node }) => (
                    <BlogItem node={node} key={node.id} />
                  ))}
              </Item.Group>
            </div>
          </OverflowWrapper>
        </div>
      </Layout>
    )
  }
}

export default Blog

export const query = graphql`
  query getAllPost {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
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

const catEnum = {
  ALL: 'All',
  ENGINEERING: 'Engineering',
  TRAVEL: 'Travel',
}

const categoryOptions = [
  { text: 'All', value: 'All' },
  { text: 'Engineering', value: 'Engineering' },
  { text: 'Travel', value: 'Travel' },
]

const styles = {
  wrapper: css`
    padding: 2rem 0;
    height: 98vh;
  `,
  headerWrapper: css`
    padding: 1rem;
  `,
  contentWrapper: css`
    padding: 1rem;
  `,
}
