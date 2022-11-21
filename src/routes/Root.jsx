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
                    <h1>Experience.</h1>
                    <div className="cv-experience-item">
                        
                    </div>
                </div>
                
                <div className="cv-education">
                    <h1>Education.</h1>
                    <p>test</p>
                </div>

                <div className="cv-stack">
                    <h1>Stack.</h1>
                </div>
            </div>

            <Footer/>
        </div>
    )
}