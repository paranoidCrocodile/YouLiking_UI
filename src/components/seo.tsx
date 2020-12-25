import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: metaObj[];
}

interface metaObj {
  name?: string;
  property?: string;
  content: string;
}

/**
 * creates a search-engine optimized header tag with certain values determined by properties in the passed Prop object.
 * @param {object} propObject {
 *   @param {string} [name]
 *   @param {string} [property]
 *   @param {string} content
 * }
 * @return {React.ReactElement}
 */

export default function SEO({
  description = "",
  lang = `en`,
  meta = [],
  title,
}: SEOProps): React.ReactElement {
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
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const metaAry: metaObj[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${defaultTitle} | ${title}`}
      meta={metaAry.concat(meta)}
    />
  );
}
