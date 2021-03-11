import React from "react";
import ContactHeader from '../../components/ContactHeader';

function ContactMe(props){
    return(
        <section class="col-sm-12 col-md-8">
            <h4>Here's My resume!</h4>
            <iframe src="https://github.com/DaronSchmit/ReactPortfolio/blob/main/src/assets/images/Resume%20(1).pdf" width="100%" height="750px">
            </iframe>
        </section>
    )
}

export default ContactMe;