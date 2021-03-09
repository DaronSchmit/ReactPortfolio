import React from "react";
import Bio from "../../components/Bio";
import Statblock from "../../components/Statblock";

function Home(props){
    return(
        <div className="row">
            <Bio />
            <Statblock />
        </div>
        )
}

export default Home;