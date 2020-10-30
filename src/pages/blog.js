import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs } } }) => {
  return (
    <Layout>
      <section className='blog-page'>
        <Blogs blogs={blogs} title="ALL BLOGS"></Blogs>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        id
        category
        desc
        title
        url
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
