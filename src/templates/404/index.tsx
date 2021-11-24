import { StandardLayout as Layout } from '../layouts/Standard';
import { Meta } from '@components/widgets/Meta';
import React from 'react';

export const NotFound = () => (
  <Layout>
    <Meta title="404: Not found" />
    <h1>404: Not Found</h1>
  </Layout>
);
