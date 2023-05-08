import { useState } from "react"
import "./Header.scss"

export default function Header() {
    let [navOpen, setNavOpen] = useState(false);

    return (
        <header className="primary-header flex">
            <h1 className="title">Rían Errity</h1>
    
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
                            1
                        </a>
                    </li>
                    <li>
                        <a href="/blog">
                            2
                        </a>
                    </li>
                    <li>
                        <a href="/cv.pdf">
                            3
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            4
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}