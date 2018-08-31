import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Image } from 'semantic-ui-react'
import { css } from 'react-emotion'
import { OverflowWrapper, PageHeader, SubHeader } from '../components'

class Social extends Component {
  state = {
    instagramUrls: [],
  }

  handleInstagramUrls = postsArray =>
    this.setState({
      instagramUrls: postsArray,
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
        let array = []
        posts.map(post => {
          array.push(post.images.standard_resolution.url)
          this.handleInstagramUrls(array)
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { instagramUrls } = this.state

    return (
      <div className={styles.wrapper}>
        <PageHeader text="Lifestyle" />
        <SubHeader text="Photos" />
        <OverflowWrapper>
          <Grid container verticalAlign="middle" columns={3} centered>
            {instagramUrls.map(url => {
              return (
                <Grid.Column>
                  <Image
                    src={url}
                    style={{
                      objectFit: 'cover',
                      maxHeight: '320px',
                      width: '320px',
                    }}
                  />
                </Grid.Column>
              )
            })}
          </Grid>
        </OverflowWrapper>
      </div>
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
