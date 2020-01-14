import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Grid, Loader } from 'semantic-ui-react';
import Layout from '../components/layout';
import { PhotoCard } from '../components';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';
import { PageHeader, SubHeader } from '../shared/typography';

class Lifestyle extends Component {
  state = {
    instagramPostArray: [],
    isLoading: true,
  };

  componentDidMount() {
    const token = process.env.GATSBY_INSTAGRAM_TOKEN;
    const photoCount = 20;

    axios
      .get('https://api.instagram.com/v1/users/self/media/recent', {
        params: { access_token: token, count: photoCount },
      })
      .then(response => {
        const posts = response.data.data;
        const postArray = [];

        posts.map(post => {
          const { images, caption, likes, link, created_time } = post;
          const convertedDate = (
            <Moment unix format="MM/DD/YYYY">
              {created_time}
            </Moment>
          );
          const postObj = {
            caption: caption.text,
            likes: likes.count,
            date: convertedDate,
            imageUrlLow: images.low_resolution.url,
            imageUrlStandard: images.standard_resolution.url,
            imageUrlThumb: images.thumbnail.url,
            igLink: link,
          };
          postArray.push(postObj);

          if (postArray.length === photoCount) {
            this.setState({ isLoading: false });
          }

          this.handleInstagramData(postArray);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInstagramData = postArray => {
    this.setState({
      instagramPostArray: postArray,
    });
  };

  render() {
    const { instagramPostArray, isLoading } = this.state;

    return (
      <Layout>
        <HeaderWrapper>
          <PageHeader text="Instagram" />
          <SubHeader text="@bsteezy" />
        </HeaderWrapper>
        <ContentWrapper lifestyle>
          {isLoading ? (
            <Loader active inline="centered" style={{ top: '40%' }} />
          ) : (
            <Grid
              container
              stackable
              verticalAlign="middle"
              columns={3}
              style={{ marginTop: 0 }}
            >
              {instagramPostArray.map(post => (
                <Grid.Column key={post.igLink}>
                  <PhotoCard
                    caption={post.caption}
                    likes={post.likes}
                    date={post.date}
                    imageUrlLow={post.imageUrlLow}
                    imageUrlStandard={post.imageUrlStandard}
                    imageUrlThumb={post.imageUrlThumb}
                    igLink={post.igLink}
                  />
                </Grid.Column>
              ))}
              <Grid.Column>
                <p>
                  My Instagram developer account is in sandbox mode and I'm
                  limited to only 20 photos{' '}
                  <span role="img" aria-label="emoji">
                    😫
                  </span>
                  <br />
                  <br />
                  Follow me at{' '}
                  <a
                    href="https://www.instagram.com/bsteezy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @bsteezy
                  </a>
                </p>
              </Grid.Column>
            </Grid>
          )}
        </ContentWrapper>
      </Layout>
    );
  }
}

export default Lifestyle;
