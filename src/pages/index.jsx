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
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "brandon-couch.jpg" }) {
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
  `);

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
                <h1 css={styles.jumbo}>Vlogger.</h1>
                <h1 css={styles.jumbo}>Photographer.</h1>
                <h1 css={styles.jumbo}>Disc Jockey.</h1>
              </Typist>
              <Typist cursor={{ show: false }} startDelay={600}>
                <h1 css={styles.jumboMobile}>
                  Developer. Vlogger.
                  <br />
                  Photographer. Disc Jockey.
                </h1>
              </Typist>
            </div>
          </Grid.Column>
        </Grid>
      </ContentWrapper>
    </Layout>
  );
};

export default Home;

const styles = {
  jumbo: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.5px;
    font-size: 4rem;
    color: #fff;
    text-shadow: 1px 1px #000000, 2px 2px #000000, 3px 3px #000000, 4px 4px #000000, 5px 5px #000000, 6px 6px #000000, 7px 7px #000000, 8px 8px #000000, 9px 9px #000000, 10px 10px #000000, 11px 11px #000000, 12px 12px #000000, 13px 13px #000000, 14px 14px #000000, 15px 15px #000000, 16px 16px #000000, 17px 17px #000000, 18px 18px #000000, 19px 19px #000000, 20px 20px #000000, 21px 21px #000000, 22px 22px #090909, 23px 23px #090909, 24px 24px #090909, 25px 25px #090909, 26px 26px #090909, 27px 27px #090909, 28px 28px #090909, 29px 29px #090909, 30px 30px #090909, 31px 31px #090909, 32px 32px #090909, 33px 33px #090909, 34px 34px #090909, 35px 35px #090909, 36px 36px #090909, 37px 37px #090909, 38px 38px #090909, 39px 39px #090909, 40px 40px #090909, 41px 41px #090909, 42px 42px #090909, 43px 43px #131313, 44px 44px #131313, 45px 45px #131313, 46px 46px #131313, 47px 47px #131313, 48px 48px #131313, 49px 49px #131313, 50px 50px #131313, 51px 51px #131313, 52px 52px #131313, 53px 53px #131313, 54px 54px #131313, 55px 55px #131313, 56px 56px #131313, 57px 57px #131313, 58px 58px #131313, 59px 59px #131313, 60px 60px #131313, 61px 61px #131313, 62px 62px #131313, 63px 63px #131313, 64px 64px #1a1a1a, 65px 65px #1a1a1a, 66px 66px #1a1a1a, 67px 67px #1a1a1a, 68px 68px #1a1a1a, 69px 69px #1a1a1a, 70px 70px #1a1a1a, 71px 71px #1a1a1a, 72px 72px #1a1a1a, 73px 73px #1a1a1a, 74px 74px #1a1a1a, 75px 75px #1a1a1a, 76px 76px #1a1a1a, 77px 77px #1a1a1a, 78px 78px #1a1a1a, 79px 79px #1a1a1a, 80px 80px #1a1a1a, 81px 81px #1a1a1a, 82px 82px #1a1a1a, 83px 83px #1a1a1a, 84px 84px #1a1a1a, 85px 85px #1a1b1d, 86px 86px #1a1b1d, 87px 87px #1a1b1d, 88px 88px #1a1b1d, 89px 89px #1a1b1d, 90px 90px #1a1b1d, 91px 91px #1a1b1d, 92px 92px #1a1b1d, 93px 93px #1a1b1d, 94px 94px #1a1b1d, 95px 95px #1a1b1d, 96px 96px #1a1b1d, 97px 97px #1a1b1d, 98px 98px #1a1b1d, 99px 99px #1a1b1d, 100px 100px #1a1b1d, 101px 101px #1a1b1d, 102px 102px #1a1b1d, 103px 103px #1a1b1d, 104px 104px #1a1b1d, 105px 105px #1a1b1d, 106px 106px #1a1b1d, 107px 107px #1a1b1d, 108px 108px #1a1b1d, 109px 109px #1a1b1d, 110px 110px #1a1b1d, 111px 111px #1a1b1d, 112px 112px #1a1b1d, 113px 113px #1a1b1d, 114px 114px #1a1b1d, 115px 115px #1a1b1d, 116px 116px #1a1b1d, 117px 117px #1a1b1d, 118px 118px #1a1b1d, 119px 119px #1a1b1d, 120px 120px #1a1b1d, 121px 121px #1a1b1d, 122px 122px #1a1b1d, 123px 123px #1a1b1d, 124px 124px #1a1b1d, 125px 125px #1a1b1d, 126px 126px #1a1b1d, 127px 127px #1a1b1d, 128px 128px #1a1b1d, 129px 129px #1a1b1d, 130px 130px #1a1b1d, 131px 131px #1a1b1d, 132px 132px #1a1b1d, 133px 133px #1a1b1d, 134px 134px #1a1b1d, 135px 135px #1a1b1d, 136px 136px #1a1b1d, 137px 137px #1a1b1d, 138px 138px #1a1b1d, 139px 139px #1a1b1d, 140px 140px #1a1b1d, 141px 141px #1a1b1d, 142px 142px #1a1b1d, 143px 143px #1a1b1d, 144px 144px #1a1b1d, 145px 145px #1a1b1d, 146px 146px #1a1b1d, 147px 147px #1a1b1d, 148px 148px #1a1b1d, 149px 149px #1a1b1d, 150px 150px #1a1b1d, 151px 151px #1a1b1d, 152px 152px #1a1b1d, 153px 153px #1a1b1d, 154px 154px #1a1b1d, 155px 155px #1a1b1d, 156px 156px #1a1b1d, 157px 157px #1a1b1d, 158px 158px #1a1b1d, 159px 159px #1a1b1d, 160px 160px #1a1b1d, 161px 161px #1a1b1d, 162px 162px #1a1b1d, 163px 163px #1a1b1d, 164px 164px #1a1b1d, 165px 165px #1a1b1d, 166px 166px #1a1b1d, 167px 167px #1a1b1d, 168px 168px #1a1b1d, 169px 169px #1a1b1d, 170px 170px #1a1b1d, 171px 171px #1a1b1d, 172px 172px #1a1b1d, 173px 173px #1a1b1d, 174px 174px #1a1b1d, 175px 175px #1a1b1d, 176px 176px #1a1b1d, 177px 177px #1a1b1d, 178px 178px #1a1b1d, 179px 179px #1a1b1d, 180px 180px #1a1b1d, 181px 181px #1a1b1d, 182px 182px #1a1b1d, 183px 183px #1a1b1d, 184px 184px #1a1b1d, 185px 185px #1a1b1d, 186px 186px #1a1b1d, 187px 187px #1a1b1d, 188px 188px #1a1b1d, 189px 189px #1a1b1d, 190px 190px #1a1b1d, 191px 191px #1a1b1d, 192px 192px #1a1b1d, 193px 193px #1a1b1d, 194px 194px #1a1b1d, 195px 195px #1a1b1d, 196px 196px #1a1b1d, 197px 197px #1a1b1d, 198px 198px #1a1b1d, 199px 199px #1a1b1d, 200px 200px #1a1b1d, 201px 201px #1a1b1d, 202px 202px #1a1b1d, 203px 203px #1a1b1d, 204px 204px #1a1b1d, 205px 205px #1a1b1d, 206px 206px #1a1b1d, 207px 207px #1a1b1d, 208px 208px #1a1b1d, 209px 209px #1a1b1d, 210px 210px #1a1b1d, 211px 211px #1a1b1d, 212px 212px #1a1b1d, 213px 213px #1a1b1d, 214px 214px #1a1b1d, 215px 215px #1a1b1d, 216px 216px #1a1b1d, 217px 217px #1a1b1d, 218px 218px #1a1b1d, 219px 219px #1a1b1d, 220px 220px #1a1b1d, 221px 221px #1a1b1d, 222px 222px #1a1b1d, 223px 223px #1a1b1d, 224px 224px #1a1b1d, 225px 225px #1a1b1d, 226px 226px #1a1b1d, 227px 227px #1a1b1d, 228px 228px #1a1b1d, 229px 229px #1a1b1d, 230px 230px #1a1b1d, 231px 231px #1a1b1d, 232px 232px #1a1b1d, 233px 233px #1a1b1d, 234px 234px #1a1b1d, 235px 235px #1a1b1d, 236px 236px #1a1b1d, 237px 237px #1a1b1d, 238px 238px #1a1b1d, 239px 239px #1a1b1d, 240px 240px #1a1b1d, 241px 241px #1a1b1d, 242px 242px #1a1b1d, 243px 243px #1a1b1d, 244px 244px #1a1b1d, 245px 245px #1a1b1d, 246px 246px #1a1b1d, 247px 247px #1a1b1d, 248px 248px #1a1b1d, 249px 249px #1a1b1d, 250px 250px #1a1b1d, 251px 251px #1a1b1d, 252px 252px #1a1b1d, 253px 253px #1a1b1d, 254px 254px #1a1b1d, 255px 255px #1a1b1d, 256px 256px #1a1b1d, 257px 257px #1a1b1d, 258px 258px #1a1b1d, 259px 259px #1a1b1d, 260px 260px #1a1b1d, 261px 261px #1a1b1d, 262px 262px #1a1b1d, 263px 263px #1a1b1d, 264px 264px #1a1b1d, 265px 265px #1a1b1d, 266px 266px #1a1b1d, 267px 267px #1a1b1d, 268px 268px #1a1b1d, 269px 269px #1a1b1d, 270px 270px #1a1b1d, 271px 271px #1a1b1d, 272px 272px #1a1b1d, 273px 273px #1a1b1d, 274px 274px #1a1b1d, 275px 275px #1a1b1d, 276px 276px #1a1b1d, 277px 277px #1a1b1d, 278px 278px #1a1b1d, 279px 279px #1a1b1d, 280px 280px #1a1b1d, 281px 281px #1a1b1d, 282px 282px #1a1b1d, 283px 283px #1a1b1d, 284px 284px #1a1b1d, 285px 285px #1a1b1d, 286px 286px #1a1b1d, 287px 287px #1a1b1d, 288px 288px #1a1b1d, 289px 289px #1a1b1d, 290px 290px #1a1b1d, 291px 291px #1a1b1d, 292px 292px #1a1b1d, 293px 293px #1a1b1d, 294px 294px #1a1b1d, 295px 295px #1a1b1d, 296px 296px #1a1b1d, 297px 297px #1a1b1d, 298px 298px #1a1b1d, 299px 299px #1a1b1d, 300px 300px #1a1b1d, 301px 301px #1a1b1d, 302px 302px #1a1b1d, 303px 303px #1a1b1d, 304px 304px #1a1b1d, 305px 305px #1a1b1d, 306px 306px #1a1b1d, 307px 307px #1a1b1d, 308px 308px #1a1b1d, 309px 309px #1a1b1d, 310px 310px #1a1b1d, 311px 311px #1a1b1d, 312px 312px #1a1b1d, 313px 313px #1a1b1d, 314px 314px #1a1b1d, 315px 315px #1a1b1d, 316px 316px #1a1b1d, 317px 317px #1a1b1d, 318px 318px #1a1b1d, 319px 319px #1a1b1d, 320px 320px #1a1b1d, 321px 321px #1a1b1d, 322px 322px #1a1b1d, 323px 323px #1a1b1d, 324px 324px #1a1b1d, 325px 325px #1a1b1d, 326px 326px #1a1b1d, 327px 327px #1a1b1d, 328px 328px #1a1b1d, 329px 329px #1a1b1d, 330px 330px #1a1b1d, 331px 331px #1a1b1d, 332px 332px #1a1b1d, 333px 333px #1a1b1d, 334px 334px #1a1b1d, 335px 335px #1a1b1d, 336px 336px #1a1b1d, 337px 337px #1a1b1d, 338px 338px #1a1b1d, 339px 339px #1a1b1d, 340px 340px #1a1b1d, 341px 341px #1a1b1d, 342px 342px #1a1b1d, 343px 343px #1a1b1d, 344px 344px #1a1b1d, 345px 345px #1a1b1d, 346px 346px #1a1b1d, 347px 347px #1a1b1d, 348px 348px #1a1b1d, 349px 349px #1a1b1d, 350px 350px #1a1b1d, 351px 351px #1a1b1d, 352px 352px #1a1b1d, 353px 353px #1a1b1d, 354px 354px #1a1b1d, 355px 355px #1a1b1d, 356px 356px #1a1b1d, 357px 357px #1a1b1d, 358px 358px #1a1b1d, 359px 359px #1a1b1d, 360px 360px #1a1b1d, 361px 361px #1a1b1d, 362px 362px #1a1b1d, 363px 363px #1a1b1d, 364px 364px #1a1b1d, 365px 365px #1a1b1d, 366px 366px #1a1b1d, 367px 367px #1a1b1d, 368px 368px #1a1b1d, 369px 369px #1a1b1d, 370px 370px #1a1b1d, 371px 371px #1a1b1d, 372px 372px #1a1b1d, 373px 373px #1a1b1d, 374px 374px #1a1b1d, 375px 375px #1a1b1d, 376px 376px #1a1b1d, 377px 377px #1a1b1d;
}

    @media (max-width: 1024px) {
      font-size: 2.25rem;
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
      color: white;
      font-size: 1.1rem;
      text-shadow: 1px 1px #000000, 2px 2px #000000, 3px 3px #000000,
        4px 4px #000000, 5px 5px #000000, 6px 6px #000000, 7px 7px #000000,
        8px 8px #000000, 9px 9px #000000, 10px 10px #000000, 11px 11px #000000,
        12px 12px #000000, 13px 13px #000000, 14px 14px #000000,
        15px 15px #000000, 16px 16px #000000, 17px 17px #000000,
        18px 18px #000000, 19px 19px #000000, 20px 20px #000000,
        21px 21px #000000, 22px 22px #090909, 23px 23px #090909,
        24px 24px #090909, 25px 25px #090909, 26px 26px #090909,
        27px 27px #090909, 28px 28px #090909, 29px 29px #090909,
        30px 30px #090909, 31px 31px #090909, 32px 32px #090909,
        33px 33px #090909, 34px 34px #090909, 35px 35px #090909,
        36px 36px #090909, 37px 37px #090909, 38px 38px #090909,
        39px 39px #090909, 40px 40px #090909, 41px 41px #090909,
        42px 42px #090909, 43px 43px #131313, 44px 44px #131313,
        45px 45px #131313, 46px 46px #131313, 47px 47px #131313,
        48px 48px #131313, 49px 49px #131313, 50px 50px #131313,
        51px 51px #131313, 52px 52px #131313, 53px 53px #131313,
        54px 54px #131313, 55px 55px #131313, 56px 56px #131313,
        57px 57px #131313, 58px 58px #131313, 59px 59px #131313,
        60px 60px #131313, 61px 61px #131313, 62px 62px #131313,
        63px 63px #131313, 64px 64px #1a1a1a, 65px 65px #1a1a1a,
        66px 66px #1a1a1a, 67px 67px #1a1a1a, 68px 68px #1a1a1a,
        69px 69px #1a1a1a, 70px 70px #1a1a1a, 71px 71px #1a1a1a,
        72px 72px #1a1a1a, 73px 73px #1a1a1a, 74px 74px #1a1a1a,
        75px 75px #1a1a1a, 76px 76px #1a1a1a, 77px 77px #1a1a1a,
        78px 78px #1a1a1a, 79px 79px #1a1a1a, 80px 80px #1a1a1a,
        81px 81px #1a1a1a, 82px 82px #1a1a1a, 83px 83px #1a1a1a,
        84px 84px #1a1a1a, 85px 85px #1a1b1d, 86px 86px #1a1b1d,
        87px 87px #1a1b1d, 88px 88px #1a1b1d, 89px 89px #1a1b1d,
        90px 90px #1a1b1d, 91px 91px #1a1b1d, 92px 92px #1a1b1d,
        93px 93px #1a1b1d, 94px 94px #1a1b1d, 95px 95px #1a1b1d,
        96px 96px #1a1b1d, 97px 97px #1a1b1d, 98px 98px #1a1b1d,
        99px 99px #1a1b1d, 100px 100px #1a1b1d, 101px 101px #1a1b1d,
        102px 102px #1a1b1d, 103px 103px #1a1b1d, 104px 104px #1a1b1d,
        105px 105px #1a1b1d, 106px 106px #1a1b1d, 107px 107px #1a1b1d,
        108px 108px #1a1b1d, 109px 109px #1a1b1d, 110px 110px #1a1b1d,
        111px 111px #1a1b1d, 112px 112px #1a1b1d, 113px 113px #1a1b1d,
        114px 114px #1a1b1d, 115px 115px #1a1b1d, 116px 116px #1a1b1d,
        117px 117px #1a1b1d, 118px 118px #1a1b1d, 119px 119px #1a1b1d,
        120px 120px #1a1b1d, 121px 121px #1a1b1d, 122px 122px #1a1b1d,
        123px 123px #1a1b1d, 124px 124px #1a1b1d, 125px 125px #1a1b1d,
        126px 126px #1a1b1d, 127px 127px #1a1b1d, 128px 128px #1a1b1d,
        129px 129px #1a1b1d, 130px 130px #1a1b1d, 131px 131px #1a1b1d,
        132px 132px #1a1b1d, 133px 133px #1a1b1d, 134px 134px #1a1b1d,
        135px 135px #1a1b1d, 136px 136px #1a1b1d, 137px 137px #1a1b1d,
        138px 138px #1a1b1d, 139px 139px #1a1b1d, 140px 140px #1a1b1d,
        141px 141px #1a1b1d, 142px 142px #1a1b1d, 143px 143px #1a1b1d,
        144px 144px #1a1b1d, 145px 145px #1a1b1d, 146px 146px #1a1b1d,
        147px 147px #1a1b1d, 148px 148px #1a1b1d, 149px 149px #1a1b1d,
        150px 150px #1a1b1d, 151px 151px #1a1b1d, 152px 152px #1a1b1d,
        153px 153px #1a1b1d, 154px 154px #1a1b1d, 155px 155px #1a1b1d,
        156px 156px #1a1b1d, 157px 157px #1a1b1d, 158px 158px #1a1b1d,
        159px 159px #1a1b1d, 160px 160px #1a1b1d, 161px 161px #1a1b1d,
        162px 162px #1a1b1d, 163px 163px #1a1b1d, 164px 164px #1a1b1d,
        165px 165px #1a1b1d, 166px 166px #1a1b1d, 167px 167px #1a1b1d,
        168px 168px #1a1b1d, 169px 169px #1a1b1d, 170px 170px #1a1b1d,
        171px 171px #1a1b1d, 172px 172px #1a1b1d, 173px 173px #1a1b1d,
        174px 174px #1a1b1d, 175px 175px #1a1b1d, 176px 176px #1a1b1d,
        177px 177px #1a1b1d, 178px 178px #1a1b1d, 179px 179px #1a1b1d,
        180px 180px #1a1b1d, 181px 181px #1a1b1d, 182px 182px #1a1b1d,
        183px 183px #1a1b1d, 184px 184px #1a1b1d, 185px 185px #1a1b1d,
        186px 186px #1a1b1d, 187px 187px #1a1b1d, 188px 188px #1a1b1d,
        189px 189px #1a1b1d, 190px 190px #1a1b1d, 191px 191px #1a1b1d,
        192px 192px #1a1b1d, 193px 193px #1a1b1d, 194px 194px #1a1b1d,
        195px 195px #1a1b1d, 196px 196px #1a1b1d, 197px 197px #1a1b1d,
        198px 198px #1a1b1d, 199px 199px #1a1b1d, 200px 200px #1a1b1d,
        201px 201px #1a1b1d, 202px 202px #1a1b1d, 203px 203px #1a1b1d,
        204px 204px #1a1b1d, 205px 205px #1a1b1d, 206px 206px #1a1b1d,
        207px 207px #1a1b1d, 208px 208px #1a1b1d, 209px 209px #1a1b1d,
        210px 210px #1a1b1d, 211px 211px #1a1b1d, 212px 212px #1a1b1d,
        213px 213px #1a1b1d, 214px 214px #1a1b1d, 215px 215px #1a1b1d,
        216px 216px #1a1b1d, 217px 217px #1a1b1d, 218px 218px #1a1b1d,
        219px 219px #1a1b1d, 220px 220px #1a1b1d, 221px 221px #1a1b1d,
        222px 222px #1a1b1d, 223px 223px #1a1b1d, 224px 224px #1a1b1d,
        225px 225px #1a1b1d, 226px 226px #1a1b1d, 227px 227px #1a1b1d,
        228px 228px #1a1b1d, 229px 229px #1a1b1d, 230px 230px #1a1b1d,
        231px 231px #1a1b1d, 232px 232px #1a1b1d, 233px 233px #1a1b1d,
        234px 234px #1a1b1d, 235px 235px #1a1b1d, 236px 236px #1a1b1d,
        237px 237px #1a1b1d, 238px 238px #1a1b1d, 239px 239px #1a1b1d,
        240px 240px #1a1b1d, 241px 241px #1a1b1d, 242px 242px #1a1b1d,
        243px 243px #1a1b1d, 244px 244px #1a1b1d, 245px 245px #1a1b1d,
        246px 246px #1a1b1d, 247px 247px #1a1b1d, 248px 248px #1a1b1d,
        249px 249px #1a1b1d, 250px 250px #1a1b1d, 251px 251px #1a1b1d,
        252px 252px #1a1b1d, 253px 253px #1a1b1d, 254px 254px #1a1b1d,
        255px 255px #1a1b1d, 256px 256px #1a1b1d, 257px 257px #1a1b1d,
        258px 258px #1a1b1d, 259px 259px #1a1b1d, 260px 260px #1a1b1d,
        261px 261px #1a1b1d, 262px 262px #1a1b1d, 263px 263px #1a1b1d,
        264px 264px #1a1b1d, 265px 265px #1a1b1d, 266px 266px #1a1b1d,
        267px 267px #1a1b1d, 268px 268px #1a1b1d, 269px 269px #1a1b1d,
        270px 270px #1a1b1d, 271px 271px #1a1b1d, 272px 272px #1a1b1d,
        273px 273px #1a1b1d, 274px 274px #1a1b1d, 275px 275px #1a1b1d,
        276px 276px #1a1b1d, 277px 277px #1a1b1d, 278px 278px #1a1b1d,
        279px 279px #1a1b1d, 280px 280px #1a1b1d, 281px 281px #1a1b1d,
        282px 282px #1a1b1d, 283px 283px #1a1b1d, 284px 284px #1a1b1d,
        285px 285px #1a1b1d, 286px 286px #1a1b1d, 287px 287px #1a1b1d,
        288px 288px #1a1b1d, 289px 289px #1a1b1d, 290px 290px #1a1b1d,
        291px 291px #1a1b1d, 292px 292px #1a1b1d, 293px 293px #1a1b1d,
        294px 294px #1a1b1d, 295px 295px #1a1b1d, 296px 296px #1a1b1d,
        297px 297px #1a1b1d, 298px 298px #1a1b1d, 299px 299px #1a1b1d,
        300px 300px #1a1b1d, 301px 301px #1a1b1d, 302px 302px #1a1b1d,
        303px 303px #1a1b1d, 304px 304px #1a1b1d, 305px 305px #1a1b1d,
        306px 306px #1a1b1d, 307px 307px #1a1b1d, 308px 308px #1a1b1d,
        309px 309px #1a1b1d, 310px 310px #1a1b1d, 311px 311px #1a1b1d,
        312px 312px #1a1b1d, 313px 313px #1a1b1d, 314px 314px #1a1b1d,
        315px 315px #1a1b1d, 316px 316px #1a1b1d, 317px 317px #1a1b1d,
        318px 318px #1a1b1d, 319px 319px #1a1b1d, 320px 320px #1a1b1d,
        321px 321px #1a1b1d, 322px 322px #1a1b1d, 323px 323px #1a1b1d,
        324px 324px #1a1b1d, 325px 325px #1a1b1d, 326px 326px #1a1b1d,
        327px 327px #1a1b1d, 328px 328px #1a1b1d, 329px 329px #1a1b1d,
        330px 330px #1a1b1d, 331px 331px #1a1b1d, 332px 332px #1a1b1d,
        333px 333px #1a1b1d, 334px 334px #1a1b1d, 335px 335px #1a1b1d,
        336px 336px #1a1b1d, 337px 337px #1a1b1d, 338px 338px #1a1b1d,
        339px 339px #1a1b1d, 340px 340px #1a1b1d, 341px 341px #1a1b1d,
        342px 342px #1a1b1d, 343px 343px #1a1b1d, 344px 344px #1a1b1d,
        345px 345px #1a1b1d, 346px 346px #1a1b1d, 347px 347px #1a1b1d,
        348px 348px #1a1b1d, 349px 349px #1a1b1d, 350px 350px #1a1b1d,
        351px 351px #1a1b1d, 352px 352px #1a1b1d, 353px 353px #1a1b1d,
        354px 354px #1a1b1d, 355px 355px #1a1b1d, 356px 356px #1a1b1d,
        357px 357px #1a1b1d, 358px 358px #1a1b1d, 359px 359px #1a1b1d,
        360px 360px #1a1b1d, 361px 361px #1a1b1d, 362px 362px #1a1b1d,
        363px 363px #1a1b1d, 364px 364px #1a1b1d, 365px 365px #1a1b1d,
        366px 366px #1a1b1d, 367px 367px #1a1b1d, 368px 368px #1a1b1d,
        369px 369px #1a1b1d, 370px 370px #1a1b1d, 371px 371px #1a1b1d,
        372px 372px #1a1b1d, 373px 373px #1a1b1d, 374px 374px #1a1b1d,
        375px 375px #1a1b1d, 376px 376px #1a1b1d, 377px 377px #1a1b1d;
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
