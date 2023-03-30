import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Navbar from '../../components/common/Navbar';
import "./blog-page.scss"
import Bio from '../../components/Bio';

export default function BlogPost({data, children}) {
  return (
    <div className='blog-post'>
      <Navbar hasBg={true}/>
      <div className='content'>
        <Bio/>
        <section className='blog'>
          <div className='blog-header'>
            <Link to="/">Back</Link>
            <h1>{data.mdx.frontmatter.title}</h1> 
            <span>{data.mdx.frontmatter.date}</span>
          </div>
          <div className='mdx-output'>
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`