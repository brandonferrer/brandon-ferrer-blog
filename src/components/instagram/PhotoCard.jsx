import React from 'react';
import Moment from 'react-moment';
import { truncate } from 'lodash';
import { Card, Icon, Image } from 'semantic-ui-react';

const PhotoCard = ({ caption, date, imgUrl, igLink, likes }) => (
  <Card style={{ borderRadius: 0 }}>
    <Image
      src={imgUrl}
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
        <Moment format="MM/DD/YYYY">{date}</Moment>
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
    {/* <Card.Content extra>
        <a href={igLink} target="_blank" rel="noreferrer noopener">
          <Icon name="heart" />
          {likes}
        </a>
      </Card.Content> */}
  </Card>
);

export default PhotoCard;
