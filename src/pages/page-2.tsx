import { Meta } from '@components/widgets/Meta';
import { StandardLayout } from '@templates/layouts/Standard';
import { Link } from 'gatsby';
import React from 'react';

const SecondPage = () => (
  <StandardLayout>
    <Meta title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </StandardLayout>
);

export default SecondPage;
