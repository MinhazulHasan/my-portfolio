import React from "react"
import Image from "gatsby-image"
import { FaShareSquare } from "react-icons/fa"

const Blog = ({ id, title, date, desc, image, url, category }) => {
  return (
    <div className="blog">
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>
              <a href={url}><FaShareSquare className='project-icon' /></a>
            </p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </div>
  )
}

Blog.propTypes = {}

export default Blog
