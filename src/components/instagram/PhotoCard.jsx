import React from 'react'
import _ from 'lodash'
import { Card, Icon, Image } from 'semantic-ui-react'
// TODO:

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
      <Card.Description>
        {_.truncate(caption, {
          length: 24,
          separator: ' ',
        })}
      </Card.Description>
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
