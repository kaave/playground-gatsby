import { useSiteMetaData } from '@contexts/siteMetaData';
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
  description?: string;
  lang?: string;
  meta?: readonly Record<string, unknown>[];
};

export const Meta = ({ description, lang = 'en', meta = [], title }: Props) => {
  const siteMetaData = useSiteMetaData();
  const metaDescription = description ?? siteMetaData.description;

  const addedDefaultMeta = useMemo(
    () => [
      { name: 'description', content: metaDescription },
      { property: 'og:title', content: title },
      { property: 'og:description', content: metaDescription },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: siteMetaData.author ?? '' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: metaDescription },
      ...meta,
    ],
    [metaDescription, title, siteMetaData.author, meta],
  );

  return <Helmet htmlAttributes={{ lang }} title={title} titleTemplate={siteMetaData.title} meta={addedDefaultMeta} />;
};
