import React from "react";
import './style.css'
import couplePic from "../../assets/images/headshot.jpeg";

function Bio(){
    return(
        <article >
            <img src={couplePic} alt="Daron" id="headshot-wrapper" />
            <h2 className="aboutme-heading">Daron Schmit</h2>
            <p>
            Daron is a 26 year-old Web Developer <strong>(NG normal guy)</strong>. He can be found in an apartment in Minneapolis, brooding at his computer, writing code for money.
            </p>
            <p>
            For fun, Daron likes to run Dungeons and Dragons 5e or play whatever Tabletop his friends are Game Mastering. He and his buddy Greg publish a worldbuilding podcast! How neat is that?
            </p>

            <p>
            Otherwise Daron just likes to laze about the house and watch movies, hang out with his girlfriend, play fetch with the dog, and go on vacations when the world isn't ending.
            </p>
        </article>
    )
}

export default Bio;