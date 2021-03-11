import React from "react";
import resume from "../../assets/images/resume.pdf";

function Resume(props){
    return(
        <section class="col-sm-12 col-md-8 text-center">
            <h4>Here's My resume!</h4>
            <iframe title="resume" src={resume} width="100%" height="750px"></iframe>
        </section>
    )
}

export default Resume;