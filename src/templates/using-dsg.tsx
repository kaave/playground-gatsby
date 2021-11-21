import { Meta } from '@components/widgets/Meta';
import { StandardLayout } from '@templates/layouts/Standard';
import { Link } from 'gatsby';
import React from 'react';

const UsingDSG = () => (
  <StandardLayout>
    <Meta title="Using DSG" />
    <h1>Hello from a DSG Page</h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{' '}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </StandardLayout>
);

export default UsingDSG;
