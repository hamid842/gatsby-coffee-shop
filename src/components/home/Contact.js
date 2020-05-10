import React from "react"
import Title from "../globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />

      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/mqkyaero" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Hamid Mohamadi"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="mohammadi842@gmail.com"
              />
            </div>
            {/* description */}
            <div className="description">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Your description here ..."
                rows="5"
              ></textarea>
            </div>
            {/* submit */}
            <button
              className="btn btn-yellow btn-block text-capitalize mt-3"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
