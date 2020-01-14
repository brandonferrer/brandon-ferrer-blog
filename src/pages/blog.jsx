import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { Item, Dropdown } from 'semantic-ui-react';
import { isMobileOnly } from 'react-device-detect';
import { Layout, BlogItem } from '../components';
import { HeaderWrapper, ContentWrapper } from '../shared/wrappers';
import { PageHeader } from '../shared/typography';

const Blog = ({ data }) => {
  const [category, setCategory] = useState('All');
  const [blogData, setBlogData] = useState([]);
  const blogPostArray = data.allWordpressPost.edges;

  useEffect(() => {
    filterBlogData(category);
  }, [category]);

  const handleDropdownChange = (event, { value }) => setCategory(value);

  const filterBlogData = filter => {
    switch (filter) {
      case 'Engineering':
        setBlogData(
          blogPostArray.filter(
            post => post.node.categories[0].name === catEnum.ENGINEERING
          )
        );
        break;
      case 'Food':
        setBlogData(
          blogPostArray.filter(
            post => post.node.categories[0].name === catEnum.FOOD
          )
        );
        break;
      case 'Travel':
        setBlogData(
          blogPostArray.filter(
            post => post.node.categories[0].name === catEnum.TRAVEL
          )
        );
        break;
      default:
        setBlogData(blogPostArray);
    }
  };

  return (
    <Layout>
      <HeaderWrapper>
        <PageHeader text="Blog" />
        <Dropdown
          placeholder="Filter Categories"
          fluid={isMobileOnly}
          floating
          selection
          style={{ float: 'right' }}
          options={categoryOptions}
          value={category}
          onChange={handleDropdownChange}
        />
      </HeaderWrapper>
      <ContentWrapper blog>
        <Item.Group divided>
          {data &&
            blogData.map(({ node }) => <BlogItem node={node} key={node.id} />)}
        </Item.Group>
      </ContentWrapper>
    </Layout>
  );
};

export default Blog;

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
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 400, height: 300, quality: 100) {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;

const catEnum = {
  ALL: 'All',
  ENGINEERING: 'Engineering',
  FOOD: 'Food',
  TRAVEL: 'Travel',
};

const categoryOptions = [
  { text: 'All', value: 'All' },
  { text: 'Engineering', value: 'Engineering' },
  { text: 'Food', value: 'Food' },
  { text: 'Travel', value: 'Travel' },
];
