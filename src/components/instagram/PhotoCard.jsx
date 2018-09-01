import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PhotoCard = ({
  caption,
  likes,
  date,
  imageUrlLow,
  imageUrlStandard,
  imageUrlThumb,
  igLink,
}) => (
  <Card>
    <Image src={imageUrlLow} />
    <Card.Content>
      <Card.Description>{caption}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="heart" />
        {likes}
      </a>
    </Card.Content>
  </Card>
)

export default PhotoCard
