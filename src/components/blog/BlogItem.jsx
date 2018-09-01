import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

//   <Item.Group divided>
// BlogItem is wrapped in Item.Group where used
// TODO: Add thumbnail images

const BlogItem = ({ node }) => (
  <Item>
    <Item.Image />
    <Item.Content>
      <Item.Header>{node.title}</Item.Header>
      <Item.Meta>
        <span>{node.date}</span>
      </Item.Meta>
      <Item.Description>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </Item.Description>
      <Item.Extra>
        <Button primary size="medium" floated="right">
          Read Post
          <Icon name="right chevron" />
        </Button>
        <Label>{node.categories[0].name}</Label>
      </Item.Extra>
    </Item.Content>
  </Item>
)

export default BlogItem
