import { Link } from "react-router-dom"
import "../common/Nav.css"

function NavEntry({ title, href }) { 
    return (
        <Link className="common-nav nav-entry" to={href}>{title}</Link>
    )
}

export default function AdminNav() { 

    return (
        <div className="common-nav">
            <div className="common-nav title">
                paradaux.io
            </div>
            <div className="nav-entries">
                <NavEntry title="Blog Entries" href="/" />
                <NavEntry title="Analytics" href="/blog" />
                <NavEntry title="Logs" href="/projects" />
                <NavEntry title="Logout" href="/logout" />
            </div>
        </div>
    )
}