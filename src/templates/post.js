import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let featuredPic;

  if (frontmatter.featuredImage) {
    featuredPic = getImage(frontmatter.featuredImage);
  }

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div style={{fontSize: `0.75rem`, marginBottom: `0.75rem`}}>Posted on {frontmatter.date}</div>
        { featuredPic ? <GatsbyImage image={featuredPic} style={{marginBottom: `0.75rem`}}/> : null }
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
