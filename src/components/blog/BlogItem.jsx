import React from 'react'
import { Link } from 'gatsby'
import { Button, Icon, Item, Label } from 'semantic-ui-react' // Image,

//   <Item.Group divided>
// BlogItem is wrapped in Item.Group where used
// TODO: Add thumbnail images

const BlogItem = ({ node }) => (
  <Item>
    {/* <Item.Image /> */}
    <Item.Content>
      <Item.Header>{node.title}</Item.Header>
      <Item.Meta>
        <span>{node.date}</span>
      </Item.Meta>
      <Item.Description>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </Item.Description>
      <Item.Extra>
        <Link to={`blog/${node.slug}`}>
          <Button primary size="small" floated="right">
            Read Post
            <Icon name="right chevron" />
          </Button>
        </Link>
        <Label size="tiny">{node.categories[0].name}</Label>
      </Item.Extra>
    </Item.Content>
  </Item>
)

export default BlogItem
