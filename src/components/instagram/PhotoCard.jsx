import React from 'react';
import { truncate } from 'lodash';
import { Card, Icon, Image } from 'semantic-ui-react';

const PhotoCard = ({ caption, likes, date, imageUrlStandard, igLink }) => (
  <Card style={{ borderRadius: 0 }}>
    <Image
      src={imageUrlStandard}
      style={{
        objectFit: 'cover',
        height: '320px',
        maxWdidth: '320px',
        cursor: 'pointer',
        borderRadius: 0,
        border: 'none',
      }}
      onClick={() => window.open(igLink, '_blank')}
    />
    <Card.Content style={{ minHeight: '110px' }}>
      <Card.Meta>
        <span>{date}</span>
      </Card.Meta>
      <Card.Description>
        <p style={{ fontSize: '12px' }}>
          {truncate(caption, {
            length: 100,
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
);

export default PhotoCard;
