import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Avatar = () => {
  return <StaticImage src="../images/profile.jpg" alt="My Face" style={{ maxWidth:`150`, borderRadius: `50%` }} />
}

export default Avatar