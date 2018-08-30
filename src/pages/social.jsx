import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Image } from 'semantic-ui-react'
import { css } from 'react-emotion'

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
        <h1 className={styles.header}>Social Media.</h1>
        <h1 className={styles.subHeader}>"PICTURES"</h1>
        <div className={styles.postWrapper}>
          <Grid container verticalAlign="middle" columns={3} centered>
            {instagramUrls.map(url => {
              return (
                <Grid.Column>
                  <Image src={url} />
                </Grid.Column>
              )
            })}
          </Grid>
        </div>
      </div>
    )
  }
}

const styles = {
  header: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: black;
    padding-top: 2rem;
    text-align: center;
  `,
  subHeader: css`
    color: black;
    letter-spacing: 1.2px;
    @media (max-width: 500px) {
      display: none;
    }
  `,
  wrapper: css`
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
  `,
  postWrapper: css`
    overflow: auto;
    max-height: 500px;
    width: 100%;
  `,
}

export default Social
