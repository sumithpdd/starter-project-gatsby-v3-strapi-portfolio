import React from "react"
import logo from "../assets/images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <h2>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Builder" />
          <button type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </h2>
  )
}

export default Navbar
