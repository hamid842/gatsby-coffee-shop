import React from "react"
import { Link } from "gatsby"
import Title from "../globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              {" "}
              Consectetur ea id enim qui nostrud aliqua dolor do excepteur sit
              adipisicing magna cillum. Tempor laboris voluptate excepteur ipsum
              consequat ad. Adipisicing do id veniam dolor sunt deserunt aliqua
              mollit ex aute anim magna sunt. Eiusmod amet minim elit
              consectetur deserunt veniam ad adipisicing eiusmod amet. Anim ad
              amet ipsum pariatur Lorem reprehenderit Lorem eu ea enim esse.
              Pariatur qui eiusmod reprehenderit labore cupidatat sint officia
              elit. Irure quis incididunt esse velit cupidatat ea nisi.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
