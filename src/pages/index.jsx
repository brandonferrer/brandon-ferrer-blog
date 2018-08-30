import React from 'react'
import { css } from 'react-emotion'
import { Grid, Image } from 'semantic-ui-react'

const Home = () => (
  // <div className={styles.wrapper}>
  //   {/* <h1 className={styles.header}>Home.</h1> */}
  //   <div className={styles.left}>
  //     <img
  //       src="https://brandonferrer.blog/assets/brandon-pink.jpg"
  //       alt="Brandon at Arcade"
  //       className={styles.image}
  //     />
  //   </div>

  //   <div className={styles.right}>
  //     <h1>Brandon</h1>
  //   </div>
  // </div>

  <Grid
    stackable
    verticalAlign="middle"
    columns={2}
    style={{ paddingTop: '3rem' }}
  >
    <Grid.Column>
      <div style={{ width: '100%' }}>
        <img
          src="https://brandonferrer.blog/assets/brandon-pink.jpg"
          alt="Brandon at Arcade"
          className={styles.image}
        />
      </div>
    </Grid.Column>
    <Grid.Column>
      <div style={{ width: '100%' }}>
        <h1 className={styles.jumbo}>Developer.</h1>
        <h1 className={styles.jumbo}>Tourist.</h1>
        <h1 className={styles.jumbo}>Foodie.</h1>
        <h1 className={styles.jumbo}>Disc Jockey.</h1>
        <h1 className={styles.jumbo}>Blogger.</h1>
        <h1 className={styles.jumboMobile}>
          Developer. Tourist. Foodie. Disc Jockey. Blogger.
        </h1>
      </div>
    </Grid.Column>
  </Grid>
)

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

export default Home
