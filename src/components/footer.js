import React from "react"
import { FaLinkedin, FaInstagram, FaTwitterSquare, FaEnvelopeSquare } from "react-icons/fa"

import Avatar from "./avatar"

const Footer = () => (
  <footer
    style={{
      padding: `2.175rem 0`,
      fontFamily: `Montserrat, Helvetica, sans-serif`,
      fontWeight: 100,
      textDecoration: `none`,
      fontSize: `0.75rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        paddingTop: `48px`,
        alignItems: `center`, 
        textAlign: `center`,
        position: `relative`,
        margin: `82px 0px 48px`,
        borderTop: `1px solid rgb(232, 232, 232)`,
      }}
    >
      <div
        style={{
          position: `absolute`,
          top: `-35px`,
          height: `75px`,
          width: `75px`,
          background: `white`,
          padding: `8px 8px 0px`,
          borderRadius: `50%`,
          borderWidth: `1px`,
          borderStyle: `solid`,
          borderColor: `rgb(232, 232, 232)`,
        }}
      >
        <Avatar />
      </div>
      <div>
        Hi, I'm Alex! I'm a hack of all trades who's obsessed with engineering, leadership, security and startups.
        <br />
        Feel free to reach out for consulting, conferences or just advice over beers/coffee! 
      </div>
      <div
        style={{
          fontWeight: 600,
          fontSize: `2rem`,
          marginTop: `0.75rem`,
        }}
      >
        <a style={{ margin: `1rem`, color: `black` }} rel="noopener noreferrer" target="_blank" href="https://twitter.com/rimthong">
          <FaTwitterSquare />
        </a>
        <a style={{ margin: `1rem`, color: `black` }} rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/rimthong/">
          <FaInstagram />
        </a>
        <a style={{ margin: `1rem`, color: `black` }} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/rimthong/">
          <FaLinkedin />
        </a>
        <a style={{ margin: `1rem`, color: `black` }} rel="noopener noreferrer" target="_blank" href="mailto://rimthong@gmail.com">
          <FaEnvelopeSquare />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
