import * as React from "react"
import BlogListItem from "../components/blog/BlogListItem"
import Navbar from "../components/common/Navbar"
import "./index.scss"
import { graphql } from 'gatsby'
import Footer from "../components/common/Footer"
import { StaticImage } from "gatsby-plugin-image"

function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const IndexPage = ({ data }) => {
  return (
      <main>
        <Navbar hasBg={true}/>
        <div className="content">
            <section className="bio">
              <div className="bio-content">
                <h1>Rían <span>Errity</span></h1>
                <div className="bio-card">
                  
                  <StaticImage
                    src="../images/rian-headshot.png"
                    alt="A picture of Rían in Paris"
                  />
                  <p>
                    <span>Hi there &mdash;</span> I'm a {calculate_age(new Date(2002, 5, 13))}-year-old Software Engineer from Ireland. I'm currently in the process of finishing up my degree in Computer Science and Linguistics at Trinity College Dublin and working on my startup <a href="https://clove.ie">clove.ie</a>
                  </p>

                  <p>Here you can find various essays of mine, as well as tutorials and code snippets you might find useful.</p>
                </div>
              </div>
            </section>
            <section className="blog">
              <h1 className="section-title">Blog</h1>
              {data.allMdx.nodes.map(item => <BlogListItem key={item.id} item={item}/>)}
            </section>
        </div>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
export const query = graphql`
query {
  allMdx (sort: { frontmatter: { date: DESC } }) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}
`