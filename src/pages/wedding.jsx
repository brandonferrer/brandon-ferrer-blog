import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const Wedding = () => (
  <>
    <Helmet>
      <meta
        httpEquiv="refresh"
        content={`4;url=${process.env.GATSBY_WEDDING_URL}`}
      />
    </Helmet>
    <Layout>
      <h1>You'll be redirected to our wedding site.</h1>
      <h3>
        Looking forward to seeing you on our special day &nbsp;
        <span role="img" aria-label="emoji">
        ⛪
        </span>
      </h3>
    </Layout>
  </>
);

export default Wedding;
