import Layout from '@components/layout';
import Seo from '@components/seo';
import React from 'react';

const NotFoundPage = function () {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
    </Layout>
  );
};

export default NotFoundPage;
