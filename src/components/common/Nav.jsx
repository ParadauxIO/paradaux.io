import { Link } from "react-router-dom"
import "./Nav.css"

function NavEntry({ title, href }) { 
    return (
        <Link className="common-nav nav-entry" to={href}>{title}</Link>
    )
}

export default function Nav() { 

    return (
        <div className="common-nav">
            <div className="common-nav title">
                paradaux.io
            </div>
            <div className="nav-entries">
                <NavEntry title="Home" href="/" />
                <NavEntry title="Blog" href="/blog" />
                <NavEntry title="Projects" href="/projects" />
                <NavEntry title="CV" href="/cv" />
            </div>
        </div>
    )
}