import Layout from '@components/layout';
import Seo from '@components/seo';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const IndexPage = function () {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-ssr">Go to &quot;Using SSR&quot;</Link> <br />
        <Link to="/using-dsg">Go to &quot;Using DSG&quot;</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;