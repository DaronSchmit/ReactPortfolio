import React from "react";
import './style.css'
import couplePic from "../../assets/images/headshot.jpeg";

function Bio(){
    return(
        <article>
            <img src={couplePic} alt="Daron" id="headshot-wrapper" />
            <h2 >Daron Schmit</h2>
            <p>
                Daron is a Senior Software Engineer <strong>(NG Human)</strong>.
                He can be found in an house in Roseville, brooding at his computer, writing code for money.
            </p>
            <p>
                Oftentimes, Daron is found hunched over his hobby desk, assembling and painting minis.
                For social enrichment, Daron can be found at a nearby game store, playing skirmish wargames or at a nearby pickleball court trying to convince himself he's still an athlete.
            </p>
            <p>
                Otherwise Daron watches TV with his wife, sharpens his cooking skills, and hangs out with his dog and daughter. 
            </p>
            <p>Want to know more? <a rel="noopener noreferrer" target="_blank" href="https://www.owlbot.ai/chatbot/e75fa97e-d785-4f34-be1c-2b73406cb404">Ask Owlbot</a></p>
        </article>
    )
}

export default Bio;