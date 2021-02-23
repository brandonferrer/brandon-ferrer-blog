import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { axiosClient } from '../shared/api';
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
    // const token = process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN;
    const token =
      'IGQVJXd0pkV2l4dEZAVaTgzLVQ4ZAVotM01kV3Jub2dEcmhpMXlCN19TZAVpBM0NvYXpTRTVGMzExQ0ZAiQXBGUndQa29yN29ydnRWU09sTEoyOC1fd3k0ZA3pQbXlBWUJqOTNjYkNVMi1R';
    const graphUrl = 'https://graph.instagram.com';
    const limit = '63';

    try {
      // Get media ids
      const queryUserMediaEdge = await axiosClient.get(
        `${graphUrl}/me/media?fields=id&access_token=${token}&limit=${limit}`
      );
      const { data } = queryUserMediaEdge.data;

      // Use media id to get node data
      await Promise.all(
        data.map(async item => {
          const queryMediaNode = await axiosClient.get(
            `${graphUrl}/${item.id}?fields=id,media_type,caption,media_url,permalink,timestamp&access_token=${token}`
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
      postDate: new Date(data.timestamp),
      imgUrl: data.media_url,
      caption: data.caption,
      igLink: data.permalink,
    };

    this.setState({
      instagramPostArray: [...instagramPostArray, post].sort(
        (a, b) => b.postDate - a.postDate
      ),
    });

    // Remove spinner when 20 post are fetched
    if (instagramPostArray.length > 20 && isLoading) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { instagramPostArray, isLoading } = this.state;

    console.log(instagramPostArray);

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
                    date={post.postDate}
                    igLink={post.igLink}
                    // likes={post.likes}
                    // imageUrlLow={post.imageUrlLow}
                    // imageUrlStandard={post.imageUrlStandard}
                    // imageUrlThumb={post.imageUrlThumb}
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
