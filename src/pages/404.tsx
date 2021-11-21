import { Meta } from '@components/widgets/Meta';
import { StandardLayout } from '@templates/layouts/Standard';
import React from 'react';

const NotFoundPage = () => (
  <StandardLayout>
    <Meta title="404: Not found" />
    <h1>404: Not Found</h1>
  </StandardLayout>
);

export default NotFoundPage;
