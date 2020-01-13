import React from 'react';
import Helmet from 'react-helmet';

const LinkedInWidget = () => (
  <>
    <Helmet>
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      />
    </Helmet>
    <div
      className="LI-profile-badge"
      data-version="v1"
      data-size="medium"
      data-locale="en_US"
      data-type="vertical"
      data-theme="light"
      data-vanity="brandonferrer"
    >
      <a
        className="LI-simple-link"
        href="https://www.linkedin.com/in/brandonferrer?trk=profile-badge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Brandon Ferrer
      </a>
    </div>
  </>
);

export default LinkedInWidget;
