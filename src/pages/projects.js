import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <div style={{ marginBottom: `2rem` }}>
      Whenever I'm not working officially, I like to tinker on some project or another. Sometimes they're an itch I just need to scratch, other times they are just silly ideas to test new technologies. Here's whatever I'm working on these days.
    </div>

    <h2>Untitled CRM Project</h2>
    <div>
      <div>
        <p>I've had a product/startup in my mind for a few years and unfortunately, no one has come close to developing it yet. I tried working part-time with friends on it as a startup many years ago, but we ended up with a product with a diluted vision and a lack of ownership.</p>
        <p>Back in the day, I wanted a new type of customer relationship database. I was a consultant who met with various stakeholders and I would need to prepare before my meetings by doing research on my customers. Who were they? What do they like? Can I look up news about their business and their activity sector so I could ask appropriate questions and create a good rapport?</p>
        <p>Similarly, my father in law was a huge hockey fan but I knew nothing about it. In order to impress him, I would sometimes look up the latest news so I could start a conversation about the latest happenings with the Canadiens whenever we visited.</p>
        <p>My role and my interests have since shifted: I am currently more obsessed about coaching others and doing my best to see people around me grow. Nevertheless, the core mission of having a smart agent feeding you insights about how to be more empathic remains. I believe that there is an untapped niche in SaaS tools that can help us have better human interactions and grow together.</p>
      </div>
      <div>
        <h3>Tech stack</h3>
        Naturally, I wanted to try a few new technologies while building out this project, so here's what I'm using:
        <ul>
          <li>Typescript</li>
          <li>Yoga GraphQL</li>
          <li>React (latest and meanest)</li>
          <li>Apollo Client (let's see if I can avoid Redux)</li>
        </ul>
      </div>
      <div>
        <p>Interested in the project? Feel free to reach out to chat and I can keep you updated on the progress :).</p>
      </div>
    </div>
  </Layout>
)

export default Projects 
