import Nav from "../components/common/Nav.jsx"
import "./Root.css"
import heroimage from "../assets/avatar.png"
import Footer from "../components/common/Footer.jsx"
import BlogListItem from "../components/blog/BlogListItem.jsx"

export default function Root() { 
    return (
        <div className="root">
            <Nav />
            <div className="root hero">
                <div className="hero-image">
                    <img style={{objectFit: "contain"}} src={heroimage} />
                </div>
                <div className="root hero-text">
                    <p className="root title">
                        <span className="line">Hi there, I'm <span className="bold">Rían Errity</span> &mdash;&nbsp;</span>
                        <span className="line">a 20-year-old Software Developer from Ireland!</span>
                    </p>
                    <p className="root subtitle">
                        <span className="line">I'm currently working for <a href="https://abair.ie">ABAIR</a> as a React Native Developer and&nbsp;</span>
                        <span className="line"><a href="https://www.olus.education/">Olus Education</a> as a Programming Tutor</span>
                    </p> 
                </div>
            </div>

            <div className="blog-summary">
                <h1>Blog.</h1>
                <div className="blog-list-items">
                    <BlogListItem />
                    <BlogListItem />
                    <BlogListItem />
                </div>
            </div>

            <div className="cv-sections">
                <div className="cv-experience">
                    <div>
                        <h1>Experience.</h1>
                        <p>Where and what I've worked on.</p>
                    </div>
                    <div className="cv-experience-items">
                        <div className="cv-experience-item">
                            <span className="cv-jobtitle">React Native Developer</span>
                            <div className="cv-leftalign">
                                <span className="cv-company">Abair: Trinity College, Dublin </span> &nbsp;&mdash;&nbsp; <span>May 2022  / Present</span>
                            </div>
                        </div>

                        <div className="cv-experience-item">
                            <span className="cv-jobtitle">Programming Teacher</span>
                            <div className="cv-leftalign">
                                <span className="cv-company">Olus Education</span> &nbsp;&mdash;&nbsp; <span>March 2021  / Present</span>
                            </div>
                        </div>

                        <div className="cv-experience-item">
                            <span className="cv-jobtitle">Software Engineering Intern</span>
                            <div className="cv-leftalign">
                                <span className="cv-company">Microsoft Development Centre Estonia</span> &nbsp;&mdash;&nbsp; <span>June 2021  / September 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="cv-experience">
                    <div>
                        <h1>Education.</h1>
                        <p> Where and what I've studied.</p>
                    </div>
                    <div className="cv-experience-items">
                        <div className="cv-experience-item">
                            <span className="cv-jobtitle">B.A (Mod) Computer Science & Language</span>
                            <div className="cv-leftalign">
                                <span className="cv-company">Trinity College, Dublin </span> &nbsp;&mdash;&nbsp; <span>September 2020  / Present</span>
                            </div>
                        </div>
                        <div className="cv-experience-item">
                            <span className="cv-jobtitle">French Erasmus Exchange</span>
                            <div className="cv-leftalign">
                                <span className="cv-company">Université Grenoble Alpes </span> &nbsp;&mdash;&nbsp; <span>September 2022  / June 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-space"></div>

            <Footer/>
        </div>
    )
}