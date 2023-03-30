import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import "./Navbar.scss"

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export default function Navbar({hasBg}) {
    // Mobile-based navigation menu state
    const [hamburgerOpen, setHamburgerOpen] = React.useState(false);
    const toggleHamburger = () => setHamburgerOpen((prev) => !prev);

    return (
        <>
            <header className={hasBg ? "is-scrolling" : ""}>
                <div className="container">
                    <h2><span>Rían</span> Errity</h2>
                    <nav className="desktop-nav">
                        <a href="https://www.linkedin.com/in/r%C3%ADan-errity/">LinkedIn</a>
                        <a href="https://github.com/ParadauxIO">Github</a>
                        <a href="https://paradaux.io/static/cv.pdf">C.V / Résumé</a>
                        <a href="https://clove.ie">Clove Software</a>
                        <a href="https://discord.gg/62q2GKXCk4">Discord</a>
                        <a href="https://instagram.com/rian.errity">Instagram</a>
                        <a href="mailto:rian@paradaux.io" className="button">Email me!</a>
                    </nav>
                    <button className={"hamburger" + (hamburgerOpen ? " is-active" : "")} onClick={toggleHamburger}>
                        <div className="bar"/>
                    </button>
                </div>
            </header>
            <nav className={"mobile-nav" + (hamburgerOpen ? " is-active" : "")}>
                <StaticImage 
                    className="headshot"
                    alt="A picture of Rían Errity in Paris"
                    src="../../images/rian-headshot.png"
                />
                <p>
                    Hi there! I'm Rían &mdash; I'm a {calculate_age(new Date(2002, 5, 13))}-year-old developer from Ireland ! Feel free to reach out, I'd love to meet you. When I'm not writing code, or sleeping I'm studying Computer Science & Linguistics at Trinity College, Dublin.
                </p>

                <ul>
                    <li>
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#d1d5d6" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                        </svg>
                        <a href="">rian@paradaux.io</a>
                    </li>
                </ul>
                <div className="links">
                    <a href="https://www.linkedin.com/in/r%C3%ADan-errity/" className="link">LinkedIn</a>
                    <a href="https://github.com/ParadauxIO" className="link">Github</a>
                    <a href="https://paradaux.io/static/cv.pdf" className="link">C.V / Résumé</a>
                    <a href="https://clove.ie" className="link">Clove Software</a>
                    <a href="https://discord.gg/62q2GKXCk4" className="link">Discord</a>
                    <a href="https://instagram.com/rian.errity" className="link">Instagram</a>
                </div>

            </nav>
        </>
    )
}