import React from "react";
import Bio from "../../components/Bio";
import Statblock from "../../components/Statblock";

function Home(props){
    return(
        <main id="main-wrapper">
            <Bio />
            <Statblock />
        </main>
        )
}

export default Home;