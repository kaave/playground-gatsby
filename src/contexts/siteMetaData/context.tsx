import { invariant } from '@/helpers/invariant';
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

type SiteMetaData = {
  title: string;
  description: string;
  author: string;
};

const siteMetaData = createContext<Nullable<GatsbyTypes.SiteMetadataQuery>>(null);

export const SiteMetaDataProvider = ({ children }: { children: ReactNode }) => {
  const value = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(query);
  const { Provider } = siteMetaData;

  return <Provider value={value}>{children}</Provider>;
};

/**
 * @throws {Error} case of SiteData not provided.
 */
export function useSiteMetaData(): SiteMetaData {
  const value = useContext(siteMetaData);

  if (value === null || !value.site) {
    throw new Error('SiteData not provided');
  } else if (
    !invariant<SiteMetaData>(value.site.siteMetadata, data => {
      if (!data) {
        return false;
      }

      return (
        typeof (data as any)?.title === 'string' &&
        typeof (data as any)?.description === 'string' &&
        typeof (data as any)?.author === 'string'
      );
    })
  ) {
    throw new Error('SiteData is invalid');
  }

  return value.site.siteMetadata;
}
