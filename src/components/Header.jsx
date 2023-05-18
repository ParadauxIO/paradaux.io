import { useState } from "react"
import "./Header.scss"
import externalLinkIcon from "./ExternalIcon.svg"

function ExternalLink({ link, text }) {
    return (
        <a href={link} className="flex">
            <span className="external-link">
                {text}<sup><img alt="An Icon to indicate it is an external link." src={externalLinkIcon}/></sup>
            </span>
        </a>
    )
}

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
                onClick={() => { setNavOpen(prev => !prev) }}
            >
                <div className="bar" />
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
                        <a href="/cv.pdf">
                            C.V
                        </a>
                    </li>
                    <li>
                        <ExternalLink link="https://www.linkedin.com/in/r%C3%ADan-errity/" text="LinkedIn" />
                    </li>
                    <li>
                        <ExternalLink link="mailto:website@paradaux.io" text="Email Me" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}