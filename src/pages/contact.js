import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get In Touch</h3>
          <form action="https://formspree.io/f/mrgokppg" method="POST">
            <div className="form-group">
              <input type="text" name='name' placeholder="Name" className="form-control"/>
              <input type="email" name='email' placeholder="Email" className="form-control"/>
              <textarea name="message" rows="5" placeholder='Message Here' className="form-control" />             
            </div>
            <button type="submit" className="submit-btn btn">Submit Here</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
