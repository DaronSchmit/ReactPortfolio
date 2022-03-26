import React from "react";
import './style.css'
import couplePic from "../../assets/images/headshot.jpeg";

function Bio(){
    return(
        <article >
            <img src={couplePic} alt="Daron" id="headshot-wrapper" />
            <h2 className="aboutme-heading">Daron Schmit</h2>
            <p>
                Daron is a 26 year-old Web Developer <strong>(NG normal guy)</strong>.
                He can be found in an apartment in Minneapolis, brooding at his computer, writing code for money.
            </p>
            <p>
                Oftentimes, Daron is found hunched over his dining room table prepping for DnD or assembling and painting minis for wargames.
                For social enrichment, Daron can be found at one of his buddies' houses, playing board games or recording his podcast.
            </p>
            <p>
                Otherwise Daron watches TV with his wife, sharpens his cooking skills, and hangs out with the dog most of the time. 
            </p>
        </article>
    )
}

export default Bio;