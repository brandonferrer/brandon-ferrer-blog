import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Grid } from 'semantic-ui-react';
import { Layout } from '../components';
import { PageHeader } from '../shared/typography';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';
import {
  Covid19California,
  Peachjar,
  WorkPong,
  BrandonFerrer,
  Icmonster,
} from '../components/projects';

const Projects = () => {
  const data = useStaticQuery(GET_ALL_IMAGES);
  const { nodes } = data.allImageSharp;

  const filenames = {
    covid19: 'covid-19-california.png',
    peachjar1: 'send-a-flyer-1.png',
    peachjar2: 'send-a-flyer-2.png',
    workPong: 'work-pong.png',
    brandonFerrer1: 'brandon-ferrer-1.png',
    brandonFerrer2: 'brandon-ferrer-2.png',
    icmonster: 'icmonster.jpg',
  };

  // TODO: WTF. Find more elegant way to query Gatsby images
  const covid19Image = nodes.filter(
    node => node.fixed.originalName === filenames.covid19
  );
  const peachjarImage1 = nodes.filter(
    node => node.fixed.originalName === filenames.peachjar1
  );
  const peachjarImage2 = nodes.filter(
    node => node.fixed.originalName === filenames.peachjar2
  );
  const workPongImage = nodes.filter(
    node => node.fixed.originalName === filenames.workPong
  );
  const brandonFerrerImage1 = nodes.filter(
    node => node.fixed.originalName === filenames.brandonFerrer1
  );
  const brandonFerrerImage2 = nodes.filter(
    node => node.fixed.originalName === filenames.brandonFerrer2
  );
  const icmonsterImage = nodes.filter(
    node => node.fixed.originalName === filenames.icmonster
  );

  return (
    <Layout>
      <HeaderWrapper>
        <PageHeader text="Dev Projects" />
      </HeaderWrapper>
      <ContentWrapper projects>
        <Grid
          columns={2}
          container
          stackable
          verticalAlign="middle"
          textAlign="center"
        >
          <Covid19California image={covid19Image} />
          <Peachjar image1={peachjarImage1} image2={peachjarImage2} />
          <WorkPong image={workPongImage} />
          <BrandonFerrer
            image1={brandonFerrerImage1}
            image2={brandonFerrerImage2}
          />
          <Icmonster image={icmonsterImage} />
        </Grid>
      </ContentWrapper>
    </Layout>
  );
};

export default Projects;

const GET_ALL_IMAGES = graphql`
  query {
    allImageSharp {
      nodes {
        fixed(width: 1000) {
          src
          originalName
        }
      }
    }
  }
`;

// TODO: Look into Gatsby Image fixed issue. Currently using relative url.

// query {
//   allImageSharp {
//     nodes {
//       fixed {
//         base64
//         tracedSVG
//         aspectRatio
//         srcWebp
//         srcSetWebp
//       }
//     }
//   }
// }
