/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { Header } from '../../../components/widgets/Header';
import './index.scss';
import { Footer } from '@components/widgets/Footer';
import { Bootstrap } from '@templates/layouts/Bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const StandardLayout = ({ children }: Props) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(query);

  return (
    <Bootstrap>
      <Header siteTitle={data.site?.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </Bootstrap>
  );
};
