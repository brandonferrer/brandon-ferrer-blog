import React from 'react';
import { Link } from 'gatsby';
import { Button, Icon, Item, Label } from 'semantic-ui-react';

const BlogItem = ({ node }) => {
  const { title, date, excerpt, slug, categories, featured_media } = node;

  const thumbnailUrl = featured_media
    ? featured_media.localFile.childImageSharp.fixed.src
    : null;

  const trimmedExcerpt =
    excerpt.substring(0, excerpt.indexOf('</p>')).substring(0, 140) + '...';
  return (
    <Item style={{ padding: '2rem' }}>
      <Item.Image src={thumbnailUrl} />
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
            <Button
              size="small"
              floated="right"
              style={{ backgroundColor: '#1b1c1c', color: 'white' }}
            >
              Read Post
              <Icon name="right chevron" />
            </Button>
          </Link>
          <Label size="tiny">{categories[0].name}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default BlogItem;
