import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Item, Dropdown } from 'semantic-ui-react'
import { PageHeader, BlogItem, HeaderWrapper } from '../components'
import Layout from '../components/layout'
import { ContentWrapper } from '../components'

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
      case 'Food':
        passedData = blogPostArray.filter(
          post => post.node.categories[0].name === catEnum.FOOD
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
        <HeaderWrapper>
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
        </HeaderWrapper>
        <ContentWrapper blog>
          <Item.Group divided>
            {data &&
              passedData.map(({ node }) => (
                <BlogItem node={node} key={node.id} />
              ))}
          </Item.Group>
        </ContentWrapper>
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
  FOOD: 'Food',
  TRAVEL: 'Travel',
}

const categoryOptions = [
  { text: 'All', value: 'All' },
  { text: 'Engineering', value: 'Engineering' },
  { text: 'Food', value: 'Food' },
  { text: 'Travel', value: 'Travel' },
]
