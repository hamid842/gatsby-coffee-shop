import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/coffee-shop.svg"
import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }

  navbarHandler = () => {
    this.state.navOpen
      ? this.setState({ navOpen: false, css: "collapse navbar-collapse" })
      : this.setState({ navOpen: true, css: "collapse navbar-collapse show" })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/">
          <img src={logo} alt="logo" width="50px" height="50px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.psth} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item">
              <FaCartArrowDown className="cart-icon ml-sm-5" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
