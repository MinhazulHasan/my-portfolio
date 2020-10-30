import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Skills from "../components/Skills"
export default ({ data }) => {

  const { 
    allStrapiProjects: {
      nodes: projects
    },
    allStrapiBlogs: {
      nodes: blogs
    }
  } = data;

  return (
    <>
      <Layout>
        <Hero />
        <Skills />
        <Projects projects={projects} title="MY PROJECTS" showLink />
        <Blogs blogs={blogs} title="BLOG" showLink/>
        <Services />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }

    allStrapiBlogs(sort: {fields: date, order: DESC}) {
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
