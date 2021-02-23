import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Loader } from 'semantic-ui-react';
import Layout from '../components/layout';
import { PhotoCard } from '../components';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';
import { PageHeader } from '../shared/typography';

class Lifestyle extends Component {
  state = {
    instagramPostArray: [],
    isLoading: true,
  };

  async componentDidMount() {
    const token = process.env.GATSBY_INSTAGRAM_ACCESSS_TOKEN;
    const graphUrl = 'https://graph.instagram.com';

    try {
      // Get media ids
      const queryUserMediaEdge = await axios.get(
        `${graphUrl}/me/media?fields=id&access_token=${token}`
      );
      const { data } = queryUserMediaEdge.data;

      // Use media id to get node data
      await Promise.all(
        data.map(async item => {
          const queryMediaNode = await axios.get(
            `${graphUrl}/${item.id}?fields=id,media_type,caption,media_url,permalink,timestamp&access_token=${token}`
          );
          this.handleInstagramData(queryMediaNode);
        })
      ).then(() => this.setState({ isLoading: false }));
    } catch (error) {
      console.log('Error getting Instagram media', error);
    }
  }

  handleInstagramData(response) {
    const { data } = response;

    const post = {
      postDate: new Date(data.timestamp),
      imgUrl: data.media_url,
      caption: data.caption,
      igLink: data.permalink,
    };

    this.setState({
      instagramPostArray: [...this.state.instagramPostArray, post].sort(
        (a, b) => b.postDate - a.postDate
      ),
    });
  }

  render() {
    const { instagramPostArray, isLoading } = this.state;

    return (
      <Layout>
        <HeaderWrapper>
          <PageHeader text="Instagram" />
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
                    imgUrl={post.imgUrl}
                    date={post.postDate}
                    igLink={post.igLink}
                    // likes={post.likes}
                    // imageUrlLow={post.imageUrlLow}
                    // imageUrlStandard={post.imageUrlStandard}
                    // imageUrlThumb={post.imageUrlThumb}
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
