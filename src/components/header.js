import { Link } from "gatsby"
import React from "react"

import Avatar from "./avatar"

const Header = () => (
  <header
    style={{
      padding: `2.175rem 0`,
      fontFamily: `Montserrat, Helvetica, sans-serif`,
      fontWeight: 600,
      letterSpacing: `1px`,
      textDecoration: `none`,
    }}
  >
    <nav
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        textTransform: `uppercase`,
        fontSize: `0.75rem`,
      }}
    >
      <div style={{
          maxWidth: `150px`,
          maxHeight: `150px`,
          minHeight: `25px`,
          minWidth: `50px`,
          margin: `0.5rem`
        }}
      >
        <Avatar />
      </div>
      <div>
        <div>
          Rimthong
        </div>
        <div
          style={{
            fontSize: `0.5rem`,
            fontWeight: 300,
          }}
        >
          Engineering, leadership & hacking
        </div>
      </div>
      <div>
        <Link style={{ margin: `1rem`, color: `black` }} to="/">About</Link>
        <Link style={{ margin: `1rem`, color: `black` }} to="/blog">Blog</Link>
        <Link style={{ margin: `1rem`, color: `black` }} to="/reading-list">Reading List</Link>
        <Link style={{ margin: `1rem`, color: `black` }} to="/projects">Projects</Link>
      </div>
    </nav>
  </header>
)

export default Header
