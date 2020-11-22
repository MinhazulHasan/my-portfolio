import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({blogs, title, showLink}) => {
  return (
    <section className='section'>
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => <Blog key={blog.id} {...blog}></Blog>)}
      </div>
      {showLink && <Link to='/blog' className='btn center-btn'>MORE BLOGS</Link>}
    </section>
  )
}
export default Blogs
