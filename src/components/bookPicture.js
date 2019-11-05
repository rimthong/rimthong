import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BookPicture = ({name}) => {
  const data = useStaticQuery(graphql`
    query {
      five_dysfunctions: file(relativePath: { eq: "book_5_dysfunctions.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      culture_code: file(relativePath: { eq: "book_culture_code.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      extreme_ownership: file(relativePath: { eq: "book_extreme_ownership.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaders_eat_last: file(relativePath: { eq: "book_leaders_eat_last.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      loonshots: file(relativePath: { eq: "book_loonshots.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      manager_path: file(relativePath: { eq: "book_manager_path.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      measure: file(relativePath: { eq: "book_measure.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      principles: file(relativePath: { eq: "book_principles.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      radical_candor: file(relativePath: { eq: "book_radical_candor.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      start_with_why: file(relativePath: { eq: "book_start_with_why.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data[name].childImageSharp.fluid}/>
}

export default BookPicture
