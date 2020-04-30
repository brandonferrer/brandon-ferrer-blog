import React from 'react';
import { get } from 'lodash';
import { Grid } from 'semantic-ui-react';

// TODO: Streamline adding new projects

const Covid19California = ({ image }) => {
  const src = get(image, '[0].fixed.src');
  return (
    <>
      <Grid.Column>
        <h3>COVID-19 California</h3>
        <p style={{ fontSize: '14px', fontStyle: 'italic' }}>React, Node</p>
        <p>
          The COVID-19 pandemic in 2020 has to be one of the most crazy and
          scary things I've experienced in my lifetime. I was a huge fan of The
          LA Times Coronavirus Tracker and was inspired to make this.
        </p>
        <p>
          Since there are no APIs to get state specific Coronavirus data yet, I
          built a web scraper in Node to take it from latimes.com. Stay safe and{' '}
          <a href="https://covid19california.today" target="_blank">
            check it out.
          </a>
        </p>
      </Grid.Column>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <img
          src={src}
          alt="Covid 19 California"
          style={{
            border: '1px #999 solid',
            height: '400px',
            margin: '0 auto',
          }}
        />
      </Grid.Column>
    </>
  );
};

const Peachjar = ({ image1, image2, image3 }) => {
  const src1 = get(image1, '[0].fixed.src');
  const src2 = get(image2, '[0].fixed.src');
  const src3 = get(image3, '[0].fixed.src');

  return (
    <>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <img
          src={src1}
          alt="Peachjar Send a Flyer"
          style={{
            border: '1px #999 solid',
            width: '500px',
            margin: '0 auto',
          }}
        />
      </Grid.Column>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <h3>Peachjar - Campaign Submission</h3>
        <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
          React, TypeScript, Material UI, Apollo, Express, PostgreSQL
        </p>
        <p>
          Worked with awesome product designers, so yes the UI is pretty. This
          was a special project for because I worked at Peachjar when they were
          on a legacy PHP application 5 years ago. Owning this workflow, and
          contributing to the migration to a microservice/micro frontend
          architecture was super rewarding!
        </p>
      </Grid.Column>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <img
          src={src3}
          alt="Peachjar Send a Flyer"
          style={{
            border: '1px #999 solid',
            width: '500px',
            margin: '0 auto',
          }}
        />
      </Grid.Column>
      <Grid.Column>
        <p>
          This page went through many iterations after getting user feedback. We
          used to have a TON of form fields here, but realized users want
          uploading flyers to be quick and easy.
        </p>
      </Grid.Column>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <img
          src={src2}
          alt="Peachjar Send a Flyer"
          style={{
            border: '1px #999 solid',
            width: '500px',
            margin: '0 auto',
          }}
        />
      </Grid.Column>
      <Grid.Column>
        <p>
          The school map finder was the best part! Solving problems around
          search, and returning large data sets was challenging and fun. Then I
          got to do a lot of the devops work for their data scientist, and
          deployed his Python service that generated school recommendations with
          Docker and Kubernetes.
        </p>
      </Grid.Column>
    </>
  );
};

const WorkPong = ({ image }) => {
  const src = get(image, '[0].fixed.src');
  return (
    <>
      <Grid.Column>
        <h3>Work Pong</h3>
        <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
          React, Redux, Webpack, Semantic UI, Firebase, Google Auth, Netlify
        </p>
        <p>
          At work, we're super serious about the pong life. We used to use a
          <em> free </em>
          SlackBot to keep track of our office ping pong standings. It kept
          asking us to purchase it for $29.99... super annoying. I made our own.
          Slack integration coming soon?
        </p>
      </Grid.Column>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <img
          src={src}
          alt="Work Pong"
          style={{
            border: '1px #999 solid',
            height: '400px',
            margin: '0 auto',
          }}
        />
      </Grid.Column>
    </>
  );
};

const BrandonFerrer = ({ image1, image2 }) => {
  const src1 = get(image1, '[0].fixed.src');
  const src2 = get(image2, '[0].fixed.src');
  return (
    <>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <img
          src={src1}
          alt="Brandon Ferrer Blog"
          style={{
            border: '1px #999 solid',
            width: '500px',
            margin: '0 auto',
          }}
        />
      </Grid.Column>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <h3>BrandonFerrer.com</h3>
        <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
          Gatsby, React, GraphQL, WordPress, Instagram API, Google Maps API,
          Netlify, Semantic UI
        </p>
        <p>
          I wanted to build a React SPA that was crawlable for SEO. Gatsby was a
          dope solution. My intention for this website was to be a blog, along
          with showing my upcoming travel plans and Instagram feed. I chose to
          use WordPress as a CMS.
        </p>
      </Grid.Column>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <img
          src={src2}
          alt="Brandon Ferrer Blog"
          style={{
            border: '1px #999 solid',
            height: '400px',
            margin: '0 auto',
          }}
        />
      </Grid.Column>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <p>
          I've gone through a lot of color and minor style changes, probably
          because it's so easy to deploy new changes with Netlify. It looks
          pretty nice on mobile! I don't even use the Instagram app anymore, I
          just come here. Just kidding.
        </p>
      </Grid.Column>
    </>
  );
};

const Icmonster = ({ image }) => {
  const src = get(image, '[0].fixed.src');
  return (
    <>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <h3>ICMonster Cafe</h3>
        <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
          HTML, CSS, Javascript, Bootstrap, Gulp, PSD to Web, SendGrid PHP Lib,
          LAMP
        </p>
        <p>
          My friend opened an ice cream shop, and her sister from China is a
          graphic designer. She mocked up PSDs, and I wrote some code... and ate
          a lot of ice cream.
        </p>
      </Grid.Column>
      <Grid.Column style={{ paddingTop: '4rem' }}>
        <img
          src={src}
          alt="Icmonster"
          style={{
            border: '1px #999 solid',
            height: '400px',
            margin: '0 auto',
          }}
        />
      </Grid.Column>
    </>
  );
};

export { Covid19California, Peachjar, WorkPong, BrandonFerrer, Icmonster };
