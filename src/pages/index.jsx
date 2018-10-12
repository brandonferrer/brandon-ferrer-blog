import React from 'react'
import { css } from 'react-emotion'
import { Grid } from 'semantic-ui-react'
import Typist from 'react-typist'
import Layout from '../components/layout'
import { ContentWrapper } from '../components'

const Home = () => (
  <Layout>
    <ContentWrapper index>
      <Grid
        stackable
        verticalAlign="middle"
        columns={2}
        style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}
      >
        <Grid.Column>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://brandonferrer.blog/assets/brandon-vlogging.jpg"
              alt="Brandon at Arcade"
              className={styles.image}
            />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div style={{ width: '100%', minHeight: '105px' }}>
            <Typist cursor={{ show: false }} startDelay={600}>
              <h1 className={styles.jumbo}>Developer.</h1>
              <h1 className={styles.jumbo}>Tourist.</h1>
              <h1 className={styles.jumbo}>Foodie.</h1>
              <h1 className={styles.jumbo}>Disc Jockey.</h1>
              <h1 className={styles.jumbo}>Blogger.</h1>
            </Typist>
            <Typist cursor={{ show: false }} startDelay={600}>
              <h1 className={styles.jumboMobile}>
                <p>
                  Developer.
                  <br />
                  Tourist. <br />
                  Foodie.
                  <br />
                  Disc Jockey.
                  <br />
                  Blogger.
                </p>
                {/* <p>Developer.</p>
                <p>Tourist. </p>
                <p>Foodie.</p>
                <p>Disc Jockey.</p>
                <p>Blogger.</p> */}
              </h1>
            </Typist>
          </div>
        </Grid.Column>
      </Grid>
    </ContentWrapper>
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
    @media (max-width: 1024px) {
      font-size: 2.5rem;
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
      text-align: center;
    }
  `,
  image: css`
    max-width: 400px;
    margin: 0;
    @media (max-width: 992px) {
      width: 100%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  `,
  // wrapper: css`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-around;
  //   padding: 2rem 0;
  //   height: 98vh;
  // `,
}
