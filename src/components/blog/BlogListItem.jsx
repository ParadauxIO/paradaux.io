import { Link } from "gatsby"
import * as React from "react"
import "./BlogListItem.scss"


export default function BlogListItem({item}) {
    console.log(item)
    return (
        <article className="blog-list-item">
            <div>
                <div className="title">
                    <h1>{item.frontmatter.title}</h1>
                    <span>{item.frontmatter.date}</span>
                </div>
                <p>
                    {item.excerpt}
                </p>
                <Link to={`/blog/${item.frontmatter.slug}`}>
                    Read more...
                </Link>
            </div>
        </article>
    )
}