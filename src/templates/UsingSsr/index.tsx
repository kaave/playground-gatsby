import { StandardLayout as Layout } from '../layouts/Standard';
import { Meta } from '@components/widgets/Meta';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
  serverData: { message: string };
};

export const UsingSsr = ({ serverData }: Props) => (
  <Layout>
    <Meta title="Using SSR" />
    <h1>SSR page</h1>
    <img style={{ width: '300px' }} alt="A random dog" src={serverData.message} />
    <p>Welcome to a server side rendered page with a random dog photo</p>
    <p>
      To learn more, head over to our{' '}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
        documentation about Server Side Rendering
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);
