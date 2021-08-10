import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { igClient } from '../shared/api';
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
    const token =
      'IGQVJYY0U1NTBSeU5FSklBSTEyeFRJdTE4MGtiUEM2dko1amVFN3ZANS2tySlJSaUcxRk5SZADZAITGNKUjZABS0ppWTRpbDNVcWlod0lLNV9INFlZAcllfdG9EUHZAYNWpWcWRKLWlRcDN3';
    const limit = '63';

    try {
      // Get media ids
      const queryUserMediaEdge = await igClient.get(
        `/me/media?fields=id&access_token=${token}&limit=${limit}`
      );
      const { data } = queryUserMediaEdge.data;

      // Use media id to get node data
      await Promise.all(
        data.map(async item => {
          const queryMediaNode = await igClient.get(
            `/${item.id}?fields=id,media_type,caption,media_url,permalink,timestamp&access_token=${token}`
          );
          this.handleInstagramData(queryMediaNode);
        })
      );
    } catch (error) {
      console.log('Error getting Instagram media', error);
    }
  }

  handleInstagramData(response) {
    const { instagramPostArray, isLoading } = this.state;
    const { data } = response;

    const post = {
      date: new Date(data.timestamp),
      imgUrl: data.media_url,
      caption: data.caption,
      igLink: data.permalink,
    };

    this.setState({
      instagramPostArray: [...instagramPostArray, post].sort(
        (a, b) => b.date - a.date
      ),
    });

    // Remove spinner when 20 post are fetched
    if (instagramPostArray.length > 20 && isLoading) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { instagramPostArray, isLoading } = this.state;

    return (
      <Layout>
        <HeaderWrapper>
          <PageHeader text="Lifestyle" />
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
                    date={post.date}
                    igLink={post.igLink}
                    // likes={post.likes}
                  />
                </Grid.Column>
              ))}
            </Grid>
          )}
        </ContentWrapper>
      </Layout>
    );
  }
}

export default Lifestyle;
