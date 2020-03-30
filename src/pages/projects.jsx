import React from 'react';
import { Grid } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Layout } from '../components';
import { PageHeader, SubHeader } from '../shared/typography';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';

// TODO: Refactor this bullshit

const Projects = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="Dev Projects" />
      <SubHeader text="Work" />
    </HeaderWrapper>
    <ContentWrapper projects>
      <Grid
        columns={2}
        container
        stackable
        verticalAlign="middle"
        textAlign="center"
      >
        <Grid.Column style={{ paddingTop: '4rem' }}>
          <img
            src="http://www.brandonferrer.blog/assets/projects/send-a-flyer-1.png"
            alt="Brandon Ferrer Blog"
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
            was a special project for because I worked at Peachjar when they
            were on a legacy PHP application 5 years ago. Owning this workflow,
            and contributing to the migration to a microservice/micro frontend
            architecture was super rewarding!
          </p>
        </Grid.Column>
        <Grid.Column style={{ paddingTop: '4rem' }}>
          <img
            src="http://www.brandonferrer.blog/assets/projects/send-a-flyer-2.png"
            alt="Brandon Ferrer Blog"
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
            search, and returning large data sets was challenging and fun. Then
            I got to do a lot of the devops work for their data scientist, and
            deployed his Python service that generated school recommendations
            with Docker and Kubernetes.
          </p>
        </Grid.Column>
        <Grid.Column>
          <h3>Work Pong</h3>
          <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
            React, Redux, Webpack, Semantic UI, Firebase, Google Auth, Netlify
          </p>
          <p>
            At work, we're super serious about the pong life. We used to use a
            <em> free </em>
            SlackBot to keep track of our office ping pong standings. It kept
            asking us to purchase it for $29.99... super annoying. I made our
            own. Slack integration coming soon?
          </p>
        </Grid.Column>
        <Grid.Column style={{ paddingTop: '4rem' }}>
          <img
            src="http://www.brandonferrer.blog/assets/projects/work-pong.png"
            alt="Work Pong"
            style={{
              border: '1px #999 solid',
              height: '400px',
              margin: '0 auto',
            }}
          />
        </Grid.Column>
        <Grid.Column style={{ paddingTop: '4rem' }}>
          <img
            src="http://www.brandonferrer.blog/assets/projects/brandon-ferrer-blog.png"
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
            Netlify, JAMstack, Semantic UI
          </p>
          <p>
            I wanted to build a React SPA that was crawlable for SEO. Gatsby was
            a dope solution. My intention for this website was to be a blog,
            along with showing my upcoming travel plans and Instagram feed. I
            chose to use WordPress as a CMS and API.
          </p>
        </Grid.Column>

        <Grid.Column style={{ paddingTop: '4rem' }}>
          <h3>ICMonster Cafe</h3>
          <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
            HTML, CSS, Javascript, Bootstrap, Gulp, PSD to Web, SendGrid PHP
            Lib, LAMP
          </p>
          <p>
            My friend opened an ice cream shop, and her sister from China is a
            graphic designer. She mocked up PSDs, and I wrote some code... and
            ate a lot of ice cream.
          </p>
          <p>
            Check out my freelance stuff at{' '}
            <OutboundLink
              href="http://www.webwavy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Wavy{' '}
              <span role="img" aria-label="Wave">
                🌊
              </span>
            </OutboundLink>
          </p>
        </Grid.Column>
        <Grid.Column style={{ paddingTop: '4rem' }}>
          <img
            src="http://www.brandonferrer.blog/assets/projects/icmonster.jpg"
            alt="Work Pong"
            style={{
              border: '1px #999 solid',
              height: '400px',
              margin: '0 auto',
            }}
          />
        </Grid.Column>
      </Grid>
    </ContentWrapper>
  </Layout>
);

export default Projects;
