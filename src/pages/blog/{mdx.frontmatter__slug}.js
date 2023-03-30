import * as React from 'react'
import { graphql } from 'gatsby'

export default function BlogPost({data, children}) {
  return (
    <div>
        <p>{data.mdx.frontmatter.date}</p>
        {children}
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