import { StandardLayout } from '../layouts/Standard';
import { Meta } from '@components/widgets/Meta';
import { Link } from 'gatsby';
import React from 'react';

export const Page2 = () => (
  <StandardLayout>
    <Meta title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </StandardLayout>
);
