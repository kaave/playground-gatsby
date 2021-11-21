/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title: string,
  description?: string,
  lang?: string,
  meta?: readonly Record<string, unknown>[],
};

export function Seo({ description, lang = 'en', meta = [], title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const addedDefaultMeta = useMemo(() => [
    { name: `description`, content: metaDescription, },
    { property: `og:title`, content: title, },
    { property: `og:description`, content: metaDescription, },
    { property: `og:type`, content: `website`, },
    { name: `twitter:card`, content: `summary`, },
    { name: `twitter:creator`, content: site.siteMetadata?.author ?? ``, },
    { name: `twitter:title`, content: title, },
    { name: `twitter:description`, content: metaDescription, },
    ...meta,
  ], [title, metaDescription, site.siteMetadata?.author, meta]);

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={addedDefaultMeta}
    />
  )
}

export default Seo
