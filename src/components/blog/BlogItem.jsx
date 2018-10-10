import React from 'react'
import { Link } from 'gatsby'
import { Button, Icon, Item, Label } from 'semantic-ui-react' // Image,

//   <Item.Group divided>
// BlogItem is wrapped in Item.Group where used
// TODO: Add thumbnail images

const BlogItem = ({ node }) => {
  const { title, date, excerpt, slug, categories } = node
  const trimmedExcerpt = excerpt.substring(0, excerpt.indexOf('</p>'))
  return (
    <Item>
      {/* <Item.Image /> */}
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Item.Meta>
          <span>{date}</span>
        </Item.Meta>
        <Item.Description>
          <div dangerouslySetInnerHTML={{ __html: trimmedExcerpt }} />
        </Item.Description>
        <Item.Extra>
          <Link to={`blog/${slug}`}>
            <Button primary size="small" floated="right">
              Read Post
              <Icon name="right chevron" />
            </Button>
          </Link>
          <Label size="tiny">{categories[0].name}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default BlogItem
