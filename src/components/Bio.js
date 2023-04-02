import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import "./Bio.scss"

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

export default function Bio() {
    return (
        <section className="bio">
        <div className="bio-content">
          <h1>Rían <span>Errity</span></h1>
          <div className="bio-card">
            <StaticImage
              src="../images/rian-headshot.png"
              alt="A picture of Rían in Paris"
            />
            <p>
              <span>Hi there &mdash;</span> I'm a {calculate_age(new Date(2002, 5, 13))}-year-old Software Engineer from Ireland. I'm currently in the process of finishing up my degree in Computer Science and Linguistics at Trinity College Dublin and working on my startup <a href="https://clove.ie">clove.ie</a>
            </p>

            <p>Here you can find various essays of mine, as well as tutorials and code snippets you might find useful.</p>
          </div>

          <div className='bio-card down'>
            <span className='quote'>The best way to predict the future is to invent it.</span>
            <span className='quote-credit'> ~ Alan Kay (1970)</span>
          </div>
        </div>
      </section>
    )
}