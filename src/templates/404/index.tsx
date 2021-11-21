import { StandardLayout } from '../layouts/Standard';
import { Meta } from '@components/widgets/Meta';
import React from 'react';

export const NotFound = () => (
  <StandardLayout>
    <Meta title="404: Not found" />
    <h1>404: Not Found</h1>
  </StandardLayout>
);
