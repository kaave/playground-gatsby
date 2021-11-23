import { graphql, useStaticQuery } from 'gatsby';
import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const siteMetaData = createContext<Nullable<GatsbyTypes.SiteMetadataQuery>>(null);

export const SiteMetaDataProvider = ({ children }: { children: ReactNode }) => {
  const value = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(query);
  const { Provider } = siteMetaData;

  return <Provider value={value}>{children}</Provider>;
};

/**
 * @throws {Error} case of SiteData not provided.
 */
export function useSiteMetaData(): NonNullable<GatsbyTypes.SiteMetadataQuery['site']>['siteMetadata'] {
  const value = useContext(siteMetaData);

  if (value === null || !value.site) {
    throw new Error('SiteData not provided');
  }

  return value.site.siteMetadata;
}
