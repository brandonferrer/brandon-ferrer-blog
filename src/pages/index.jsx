import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Grid } from 'semantic-ui-react';
import Typist from 'react-typist';
import { Layout } from '../components';
import { ContentWrapper } from '../shared/wrappers';

const Home = () => {
  const data = useStaticQuery(GET_INDEX_IMAGE);

  return (
    <Layout>
      <ContentWrapper index>
        <Grid
          stackable
          verticalAlign="middle"
          columns={2}
          style={{ width: '100%', margin: 0, padding: 0 }}
        >
          <Grid.Column>
            <div css={styles.imageWrapper}>
              <Img
                css={styles.image}
                fluid={data.image.childImageSharp.fluid}
              />
            </div>
          </Grid.Column>
          <Grid.Column>
            <div
              style={{
                width: '100%',
                minHeight: '40px',
                margin: 0,
                padding: 0,
              }}
            >
              <Typist cursor={{ show: false }} startDelay={600}>
                <h1 css={styles.jumbo}>Developer.</h1>
                <h1 css={styles.jumbo}>Content Creator.</h1>
                <h1 css={styles.jumbo}>Photographer.</h1>
                <h1 css={styles.jumbo}>Disc Jockey.</h1>
              </Typist>
            </div>
          </Grid.Column>
        </Grid>
      </ContentWrapper>
    </Layout>
  );
};

export default Home;

const GET_INDEX_IMAGE = graphql`
  query {
    image: file(relativePath: { eq: "brandon-game.jpg" }) {
      id
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const styles = {
  jumbo: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.5px;
    font-size: 3.5rem;
    color: #fff;
    text-shadow: 1px 1px #1b1c1c, 2px 2px #1b1c1c, 3px 3px #1b1c1c, 4px 4px #1b1c1c, 5px 5px #1b1c1c, 6px 6px #1b1c1c, 7px 7px #1b1c1c, 8px 8px #1b1c1c, 9px 9px #1b1c1c, 10px 10px #1b1c1c, 11px 11px #1b1c1c, 12px 12px #1b1c1c, 13px 13px #1b1c1c, 14px 14px #1b1c1c, 15px 15px #1b1c1c, 16px 16px #1b1c1c, 17px 17px #1b1c1c, 18px 18px #1b1c1c, 19px 19px #1b1c1c, 20px 20px #1b1c1c, 21px 21px #1b1c1c, 22px 22px #1b1c1c, 23px 23px #1b1c1c, 24px 24px #1b1c1c, 25px 25px #1b1c1c, 26px 26px #1b1c1c, 27px 27px #1b1c1c, 28px 28px #1b1c1c, 29px 29px #1b1c1c, 30px 30px #1b1c1c, 31px 31px #1b1c1c, 32px 32px #1b1c1c, 33px 33px #1b1c1c, 34px 34px #1b1c1c, 35px 35px #1b1c1c, 36px 36px #1b1c1c, 37px 37px #1b1c1c, 38px 38px #1b1c1c, 39px 39px #1b1c1c, 40px 40px #1b1c1c, 41px 41px #1b1c1c, 42px 42px #1b1c1c, 43px 43px #1b1c1c, 44px 44px #1b1c1c, 45px 45px #1b1c1c, 46px 46px #1b1c1c, 47px 47px #1b1c1c, 48px 48px #1b1c1c, 49px 49px #1b1c1c, 50px 50px #1b1c1c, 51px 51px #1b1c1c, 52px 52px #1b1c1c, 53px 53px #1b1c1c, 54px 54px #1b1c1c, 55px 55px #1b1c1c, 56px 56px #1b1c1c, 57px 57px #1b1c1c, 58px 58px #1b1c1c, 59px 59px #1b1c1c, 60px 60px #1b1c1c, 61px 61px #1b1c1c, 62px 62px #1b1c1c, 63px 63px #1b1c1c, 64px 64px #1b1c1c, 65px 65px #1b1c1c, 66px 66px #1b1c1c, 67px 67px #1b1c1c, 68px 68px #1b1c1c, 69px 69px #1b1c1c, 70px 70px #1b1c1c, 71px 71px #1b1c1c, 72px 72px #1b1c1c, 73px 73px #1b1c1c, 74px 74px #1b1c1c, 75px 75px #1b1c1c, 76px 76px #1b1c1c, 77px 77px #1b1c1c, 78px 78px #1b1c1c, 79px 79px #1b1c1c, 80px 80px #1b1c1c, 81px 81px #1b1c1c, 82px 82px #1b1c1c, 83px 83px #1b1c1c, 84px 84px #1b1c1c, 85px 85px #1b1c1c, 86px 86px #1b1c1c, 87px 87px #1b1c1c, 88px 88px #1b1c1c, 89px 89px #1b1c1c, 90px 90px #1b1c1c, 91px 91px #1b1c1c, 92px 92px #1b1c1c, 93px 93px #1b1c1c, 94px 94px #1b1c1c, 95px 95px #1b1c1c, 96px 96px #1b1c1c, 97px 97px #1b1c1c, 98px 98px #1b1c1c, 99px 99px #1b1c1c, 100px 100px #1b1c1c, 101px 101px #1b1c1c, 102px 102px #1b1c1c, 103px 103px #1b1c1c, 104px 104px #1b1c1c, 105px 105px #1b1c1c, 106px 106px #1b1c1c, 107px 107px #1b1c1c, 108px 108px #1b1c1c, 109px 109px #1b1c1c, 110px 110px #1b1c1c, 111px 111px #1b1c1c, 112px 112px #1b1c1c, 113px 113px #1b1c1c, 114px 114px #1b1c1c, 115px 115px #1b1c1c, 116px 116px #1b1c1c, 117px 117px #1b1c1c, 118px 118px #1b1c1c, 119px 119px #1b1c1c, 120px 120px #1b1c1c, 121px 121px #1b1c1c, 122px 122px #1b1c1c, 123px 123px #1b1c1c, 124px 124px #1b1c1c, 125px 125px #1b1c1c, 126px 126px #1b1c1c, 127px 127px #1b1c1c, 128px 128px #1b1c1c, 129px 129px #1b1c1c, 130px 130px #1b1c1c, 131px 131px #1b1c1c, 132px 132px #1b1c1c, 133px 133px #1b1c1c, 134px 134px #1b1c1c, 135px 135px #1b1c1c, 136px 136px #1b1c1c, 137px 137px #1b1c1c, 138px 138px #1b1c1c, 139px 139px #1b1c1c, 140px 140px #1b1c1c, 141px 141px #1b1c1c, 142px 142px #1b1c1c, 143px 143px #1b1c1c, 144px 144px #1b1c1c, 145px 145px #1b1c1c, 146px 146px #1b1c1c, 147px 147px #1b1c1c, 148px 148px #1b1c1c, 149px 149px #1b1c1c, 150px 150px #1b1c1c, 151px 151px #1b1c1c, 152px 152px #1b1c1c, 153px 153px #1b1c1c, 154px 154px #1b1c1c, 155px 155px #1b1c1c, 156px 156px #1b1c1c, 157px 157px #1b1c1c, 158px 158px #1b1c1c, 159px 159px #1b1c1c, 160px 160px #1b1c1c, 161px 161px #1b1c1c, 162px 162px #1b1c1c, 163px 163px #1b1c1c, 164px 164px #1b1c1c, 165px 165px #1b1c1c, 166px 166px #1b1c1c, 167px 167px #1b1c1c, 168px 168px #1b1c1c, 169px 169px #1b1c1c, 170px 170px #1b1c1c, 171px 171px #1b1c1c, 172px 172px #1b1c1c, 173px 173px #1b1c1c, 174px 174px #1b1c1c, 175px 175px #1b1c1c, 176px 176px #1b1c1c, 177px 177px #1b1c1c, 178px 178px #1b1c1c, 179px 179px #1b1c1c, 180px 180px #1b1c1c, 181px 181px #1b1c1c, 182px 182px #1b1c1c, 183px 183px #1b1c1c, 184px 184px #1b1c1c, 185px 185px #1b1c1c, 186px 186px #1b1c1c, 187px 187px #1b1c1c, 188px 188px #1b1c1c, 189px 189px #1b1c1c, 190px 190px #1b1c1c, 191px 191px #1b1c1c, 192px 192px #1b1c1c, 193px 193px #1b1c1c, 194px 194px #1b1c1c, 195px 195px #1b1c1c, 196px 196px #1b1c1c, 197px 197px #1b1c1c, 198px 198px #1b1c1c, 199px 199px #1b1c1c, 200px 200px #1b1c1c, 201px 201px #1b1c1c, 202px 202px #1b1c1c, 203px 203px #1b1c1c, 204px 204px #1b1c1c, 205px 205px #1b1c1c, 206px 206px #1b1c1c, 207px 207px #1b1c1c, 208px 208px #1b1c1c, 209px 209px #1b1c1c, 210px 210px #1b1c1c, 211px 211px #1b1c1c, 212px 212px #1b1c1c, 213px 213px #1b1c1c, 214px 214px #1b1c1c, 215px 215px #1b1c1c, 216px 216px #1b1c1c, 217px 217px #1b1c1c, 218px 218px #1b1c1c, 219px 219px #1b1c1c, 220px 220px #1b1c1c, 221px 221px #1b1c1c, 222px 222px #1b1c1c, 223px 223px #1b1c1c, 224px 224px #1b1c1c, 225px 225px #1b1c1c, 226px 226px #1b1c1c, 227px 227px #1b1c1c, 228px 228px #1b1c1c, 229px 229px #1b1c1c, 230px 230px #1b1c1c, 231px 231px #1b1c1c, 232px 232px #1b1c1c, 233px 233px #1b1c1c, 234px 234px #1b1c1c, 235px 235px #1b1c1c, 236px 236px #1b1c1c, 237px 237px #1b1c1c, 238px 238px #1b1c1c, 239px 239px #1b1c1c, 240px 240px #1b1c1c, 241px 241px #1b1c1c, 242px 242px #1b1c1c, 243px 243px #1b1c1c, 244px 244px #1b1c1c, 245px 245px #1b1c1c, 246px 246px #1b1c1c, 247px 247px #1b1c1c, 248px 248px #1b1c1c, 249px 249px #1b1c1c, 250px 250px #1b1c1c, 251px 251px #1b1c1c, 252px 252px #1b1c1c, 253px 253px #1b1c1c, 254px 254px #1b1c1c, 255px 255px #1b1c1c, 256px 256px #1b1c1c, 257px 257px #1b1c1c, 258px 258px #1b1c1c, 259px 259px #1b1c1c, 260px 260px #1b1c1c, 261px 261px #1b1c1c, 262px 262px #1b1c1c, 263px 263px #1b1c1c, 264px 264px #1b1c1c, 265px 265px #1b1c1c, 266px 266px #1b1c1c, 267px 267px #1b1c1c, 268px 268px #1b1c1c, 269px 269px #1b1c1c, 270px 270px #1b1c1c, 271px 271px #1b1c1c, 272px 272px #1b1c1c, 273px 273px #1b1c1c, 274px 274px #1b1c1c, 275px 275px #1b1c1c, 276px 276px #1b1c1c, 277px 277px #1b1c1c, 278px 278px #1b1c1c, 279px 279px #1b1c1c, 280px 280px #1b1c1c, 281px 281px #1b1c1c, 282px 282px #1b1c1c, 283px 283px #1b1c1c, 284px 284px #1b1c1c, 285px 285px #1b1c1c, 286px 286px #1b1c1c, 287px 287px #1b1c1c, 288px 288px #1b1c1c, 289px 289px #1b1c1c, 290px 290px #1b1c1c, 291px 291px #1b1c1c, 292px 292px #1b1c1c, 293px 293px #1b1c1c, 294px 294px #1b1c1c, 295px 295px #1b1c1c, 296px 296px #1b1c1c, 297px 297px #1b1c1c, 298px 298px #1b1c1c, 299px 299px #1b1c1c, 300px 300px #1b1c1c, 301px 301px #1b1c1c, 302px 302px #1b1c1c, 303px 303px #1b1c1c, 304px 304px #1b1c1c, 305px 305px #1b1c1c, 306px 306px #1b1c1c, 307px 307px #1b1c1c, 308px 308px #1b1c1c, 309px 309px #1b1c1c, 310px 310px #1b1c1c, 311px 311px #1b1c1c, 312px 312px #1b1c1c, 313px 313px #1b1c1c, 314px 314px #1b1c1c, 315px 315px #1b1c1c, 316px 316px #1b1c1c, 317px 317px #1b1c1c, 318px 318px #1b1c1c, 319px 319px #1b1c1c, 320px 320px #1b1c1c, 321px 321px #1b1c1c, 322px 322px #1b1c1c, 323px 323px #1b1c1c, 324px 324px #1b1c1c, 325px 325px #1b1c1c, 326px 326px #1b1c1c, 327px 327px #1b1c1c, 328px 328px #1b1c1c, 329px 329px #1b1c1c, 330px 330px #1b1c1c, 331px 331px #1b1c1c, 332px 332px #1b1c1c, 333px 333px #1b1c1c, 334px 334px #1b1c1c, 335px 335px #1b1c1c, 336px 336px #1b1c1c, 337px 337px #1b1c1c, 338px 338px #1b1c1c, 339px 339px #1b1c1c, 340px 340px #1b1c1c, 341px 341px #1b1c1c, 342px 342px #1b1c1c, 343px 343px #1b1c1c, 344px 344px #1b1c1c, 345px 345px #1b1c1c, 346px 346px #1b1c1c, 347px 347px #1b1c1c, 348px 348px #1b1c1c, 349px 349px #1b1c1c, 350px 350px #1b1c1c, 351px 351px #1b1c1c, 352px 352px #1b1c1c, 353px 353px #1b1c1c, 354px 354px #1b1c1c, 355px 355px #1b1c1c, 356px 356px #1b1c1c, 357px 357px #1b1c1c, 358px 358px #1b1c1c, 359px 359px #1b1c1c, 360px 360px #1b1c1c, 361px 361px #1b1c1c, 362px 362px #1b1c1c, 363px 363px #1b1c1c, 364px 364px #1b1c1c, 365px 365px #1b1c1c, 366px 366px #1b1c1c, 367px 367px #1b1c1c, 368px 368px #1b1c1c, 369px 369px #1b1c1c, 370px 370px #1b1c1c, 371px 371px #1b1c1c, 372px 372px #1b1c1c, 373px 373px #1b1c1c, 374px 374px #1b1c1c, 375px 375px #1b1c1c, 376px 376px #1b1c1c, 377px 377px #1b1c1c;
}
    @media (max-width: 1024px) {
      font-size: 2.25rem;
    }
    @media (max-width: 500px) {
      display: none;
    }
  `,
  imageWrapper: css`
    width: 100%;
    @media (max-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  image: css`
    max-width: 400px;
    margin: 0;
    border-radius: 2px;
    border: 18px solid #fff;
    // box-shadow: 10px 10px 5px #1b1c1c;
    @media (max-width: 992px) {
      width: 100%;
    }
  `,
};
