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
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="large"
      data-theme="light"
      data-type="HORIZONTAL"
      data-vanity="brandonferrer"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://www.linkedin.com/in/brandonferrer?trk=profile-badge"
      >
        Brandon Ferrer
      </a>
    </div>
  </>
);

export default LinkedInWidget;
