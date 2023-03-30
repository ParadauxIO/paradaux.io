import * as React from "react"
import BlogListItem from "../components/blog/BlogListItem"
import Navbar from "../components/common/Navbar"
import "./index.scss"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
      <main>
        <Navbar hasBg={true}/>
        <section className="blog">
          <h1 className="section-title">Blog</h1>
          {data.allMdx.nodes.map(item => <BlogListItem key={item.id} item={item}/>)}
        </section>
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