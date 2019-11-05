import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogEntry = (entry) => (
  <div
    key={entry.node.frontmatter.title}
    style={{
      display: `flex`,
      flexDirection: `column`,
      marginBottom: `1rem`,
    }}
  >
    <Link
      style={{
        color: `black`,
        textTransform: `uppercase`,
        fontFamily: `Montserrat, Helvetica, sans-serif`,
        fontWeight: 600,
        fontSize: `1rem`,
      }}
      to={entry.node.frontmatter.path}>
      {entry.node.frontmatter.title}
    </Link>
    <div style={{
        fontWeight: 100,
        fontSize: `0.75rem`,
      }}
    >
      {entry.node.frontmatter.date}
    </div>
    {entry.node.excerpt}
  </div>
);

const BlogPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      { edges.map(BlogEntry) }
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery{
    allMarkdownRemark (sort: {
    fields: [frontmatter___date]
    order: DESC
    }) {
      edges {
        node {
          excerpt(pruneLength: 280),
          frontmatter {
            path,
            title,
            date(formatString: "MMMM DD, YYYY"),
            tags
          }
        }
      }
    }
  }
`

export default BlogPage
