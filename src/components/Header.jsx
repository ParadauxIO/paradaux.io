import { useState } from "react"
import "./Header.scss"

export default function Header() {
    let [navOpen, setNavOpen] = useState(false);

    return (
        <header className="primary-header flex">
            <h1 className="title">
                <a href="/">Rían Errity</a>
            </h1>
    
            <button
                className={"hamburger" + (navOpen ? " is-active" : "")}
                aria-controls="primary-navigation"
                aria-expanded={`${navOpen}`}
                aria-label="Menu"
                onClick={() => {setNavOpen(prev => !prev)}}
            >
                <div className="bar"/>
            </button>
                
            <nav>
                <ul 
                    id="primary-navigation" 
                    className="primary-navigation flex"
                    data-visable={`${navOpen}`}
                >
                    <li className="active">
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/blog">
                            C.V
                        </a>
                    </li>
                    <li>
                        <a href="/cv.pdf">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Email Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}