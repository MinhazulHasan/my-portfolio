import React from "react"
import Image from "gatsby-image"
import { FaShareSquare } from "react-icons/fa"

const Blog = ({ id, title, date, desc, image, url, category }) => {
  console.log(image);
  return (
    <div className="blog">
      <article>
        {image.childImageSharp && <Image fluid={image.childImageSharp.fluid} className="blog-img" />}
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
