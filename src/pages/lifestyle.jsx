import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { Grid } from 'semantic-ui-react'
import { css } from 'react-emotion'
import Layout from '../components/layout'
import {
  OverflowWrapper,
  PageHeader,
  SubHeader,
  PhotoCard,
} from '../components'

class Social extends Component {
  state = {
    instagramPostArray: [],
  }

  handleInstagramData = postArray =>
    this.setState({
      instagramPostArray: postArray,
    })

  componentDidMount() {
    const token = process.env.GATSBY_INSTAGRAM_TOKEN
    const userId = process.env.GATSBY_INSTAGRAM_USER_ID
    const photoCount = 18

    axios
      .get(`https://api.instagram.com/v1/users/${userId}/media/recent`, {
        params: { access_token: token, count: photoCount },
      })
      .then(response => {
        const posts = response.data.data
        let postArray = []
        // eslint-disable-next-line
        posts.map(post => {
          const { images, caption, likes, link, created_time } = post
          const convertedDate = (
            <Moment unix format="MM/DD/YYYY">
              {created_time}
            </Moment>
          )
          const postObj = {
            caption: caption.text,
            likes: likes.count,
            date: convertedDate,
            imageUrlLow: images.low_resolution.url,
            imageUrlStandard: images.standard_resolution.url,
            imageUrlThumb: images.thumbnail.url,
            igLink: link,
          }
          postArray.push(postObj)
          this.handleInstagramData(postArray)
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { instagramPostArray } = this.state

    return (
      <Layout>
        <div className={styles.wrapper}>
          <PageHeader text="Lifestyle" />
          <SubHeader text="Photos" />
          <OverflowWrapper>
            <Grid
              container
              stackable
              verticalAlign="middle"
              columns={3}
              centered
              style={{ marginTop: 0 }}
            >
              {instagramPostArray.map(post => {
                const {
                  caption,
                  likes,
                  date,
                  imageUrlLow,
                  imageUrlStandard,
                  imageUrlThumb,
                  igLink,
                } = post
                return (
                  <Grid.Column>
                    <PhotoCard
                      caption={caption}
                      likes={likes}
                      date={date}
                      imageUrlLow={imageUrlLow}
                      imageUrlStandard={imageUrlStandard}
                      imageUrlThumb={imageUrlThumb}
                      igLink={igLink}
                    />
                  </Grid.Column>
                )
              })}
            </Grid>
          </OverflowWrapper>
        </div>
      </Layout>
    )
  }
}

export default Social

const styles = {
  wrapper: css`
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
  `,
}
