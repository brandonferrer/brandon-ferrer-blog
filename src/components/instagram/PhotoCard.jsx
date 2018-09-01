import React from 'react'
import _ from 'lodash'
import { Card, Icon, Image } from 'semantic-ui-react'

const PhotoCard = ({
  caption,
  likes,
  date,
  imageUrlLow,
  // imageUrlStandard,
  // imageUrlThumb,
  igLink,
}) => (
  <Card>
    <Image
      src={imageUrlLow}
      style={{
        objectFit: 'cover',
        maxHeight: '320px',
        width: '320px',
      }}
    />
    <Card.Content>
      <Card.Meta>
        <span>{date}</span>
      </Card.Meta>
      <Card.Description>
        <p style={{ fontSize: '12px' }}>
          {_.truncate(caption, {
            length: 38,
            separator: ' ',
          })}
        </p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={igLink} target="_blank" rel="noreferrer noopener">
        <Icon name="heart" />
        {likes}
      </a>
    </Card.Content>
  </Card>
)

export default PhotoCard
