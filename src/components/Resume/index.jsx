import React from "react";
import ContactHeader from '../../components/ContactHeader';

function ContactMe(props){
    return(
        <section class="col-sm-12 col-md-8">
            <h4>Here's My resume!</h4>
            <iframe src="Assets\Images\Resume\Resume (1).pdf" width="100%" height="750px">
            </iframe>
        </section>
    )
}

export default ContactMe;