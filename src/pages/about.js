import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({ data: { allStrapiAbout: { nodes } } }) => {
  const {title, stack, image, info} = nodes[0];
  return (
    <Layout>
      <section className='about-page'>
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className='about-img' />
          <article className='about-text'>
            <Title title={title} />
            <p>{info}</p>
            <a href="https://www.drive.google.com/file/d/1Y7KzWbd71Xk4r6-Stj3-SUxinGClnFkH/view?usp=sharing" className="btn" target="_blank" style={{margin:'15px 0'}}>Get Resume</a>
            <div className="about-stack">
              {
                stack.map(item => <span key={item.id}>{item.title}</span>)
              }
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
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

export default About
