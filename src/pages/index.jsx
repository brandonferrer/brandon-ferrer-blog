import React from 'react'
import { css } from 'react-emotion'
import { Grid } from 'semantic-ui-react'
import Typist from 'react-typist'
import Layout from '../components/Layout'

const Home = () => (
  <Layout>
    <Grid
      stackable
      verticalAlign="middle"
      columns={2}
      style={{ paddingTop: '3rem' }}
    >
      <Grid.Column>
        <div style={{ width: '100%' }}>
          <img
            src="https://brandonferrer.blog/assets/brandon-vlogging.jpg"
            alt="Brandon at Arcade"
            className={styles.image}
          />
        </div>
      </Grid.Column>
      <Grid.Column>
        <div style={{ width: '100%' }}>
          <Typist cursor={{ show: false }} startDelay={600}>
            <h1 className={styles.jumbo}>Developer.</h1>
            <h1 className={styles.jumbo}>Tourist.</h1>
            <h1 className={styles.jumbo}>Foodie.</h1>
            <h1 className={styles.jumbo}>Disc Jockey.</h1>
            <h1 className={styles.jumbo}>Blogger.</h1>
          </Typist>
          <Typist cursor={{ show: false }} startDelay={600}>
            <h1 className={styles.jumboMobile}>
              Developer. Tourist. Foodie. Disc Jockey. Blogger.
            </h1>
          </Typist>
        </div>
      </Grid.Column>
    </Grid>
  </Layout>
)

export default Home

const styles = {
  jumbo: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: black;
    font-size: 4rem;
    @media (max-width: 992px) {
      font-size: 3rem;
    }
    @media (max-width: 500px) {
      display: none;
    }
  `,
  jumboMobile: css`
    display: none;
    @media (max-width: 500px) {
      display: block;
      font-family: Nunito Sans !important;
      font-weight: 800;
      letter-spacing: 1.2px;
      color: black;
      font-size: 1rem;
    }
  `,
  image: css`
    max-width: 400px;
    margin: 0;
    @media (max-width: 992px) {
      width: 100%;
    }
  `,
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
    height: 98vh;
  `,
}
