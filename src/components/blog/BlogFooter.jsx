import * as React from "react"
import "./BlogFooter.scss"

export default function BlogFooter() {
    return (
        <div className="blog-footer">
            <p>
                Probably goes without saying but blog entries are &copy; Rían Errity. 
            </p>

            <p>
                I really enjoy working on these posts &mdash; They're an expression of
                my own thoughts, feelings and opinions, not those of my employers.
                I will be trying to post once per month going forward at least, but we'll
                see how I do. 
            </p>

            <p>
                This blogging platform is built upon Gatsby 5, I will probably open source
                it at some point, I still have a lot of stuff to fix up before that point.
            </p>
        </div>
    )
}