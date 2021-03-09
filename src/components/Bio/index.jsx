import React from "react";
import couplePic from "../../assets/images/DaronAndCourt.jpg";

function Bio(props){
    return(
        <article className="col-sm-4 text-left">
            <img src={couplePic} alt="Daron And Court" className="img-thumbnail" id="personalThumbnail" />
            <h2 className="aboutme-heading">Daron Schmit</h2>
            <p>
            Daron is a 26 year-old Google Tech <strong>(NG normal guy)</strong> who lives in Minneapolis. He went to school for a few years at the University of Minnesota where he studied Chemistry, Physics, and Computer Science. He stopped at the tail end of 2016 when he ran out of gas after some real tough personal stuff.
            </p>
            <p>
            But he's back now! Taking online classes and shooting for the stars! He's dug his heels in at the job he had, got promoted, stuck around for a few years, then left for his current job! He likes what he's doing right now, but is looking to polish off his education and get a shiny new paper for the trouble! 
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