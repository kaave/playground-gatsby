import { graphql, useStaticQuery } from 'gatsby';
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
  description?: string;
  lang?: string;
  meta?: readonly Record<string, unknown>[];
};

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export const Meta = ({ description, lang = 'en', meta = [], title }: Props) => {
  const { site } = useStaticQuery(query);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const addedDefaultMeta = useMemo(
    () => [
      { name: `description`, content: metaDescription },
      { property: `og:title`, content: title },
      { property: `og:description`, content: metaDescription },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary` },
      { name: `twitter:creator`, content: site.siteMetadata?.author ?? `` },
      { name: `twitter:title`, content: title },
      { name: `twitter:description`, content: metaDescription },
      ...meta,
    ],
    [title, metaDescription, site.siteMetadata?.author, meta],
  );

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={addedDefaultMeta}
    />
  );
};
