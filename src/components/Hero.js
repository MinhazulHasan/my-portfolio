import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: {eq: "hero-img.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Minhaz</h1>
            <h4>Full Stack Web Devloper & Software Engineer</h4>
            <Link to='/contact' className="btn">Contact Me</Link>
            <a href="https://www.drive.google.com/file/d/1Y7KzWbd71Xk4r6-Stj3-SUxinGClnFkH/view?usp=sharing" className="btn btn-cv" target="_blank" style={{marginLeft:'20px'}}>Get Resume</a>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
