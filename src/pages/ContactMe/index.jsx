import React from "react";
import ContactHeader from '../../components/ContactHeader';
import ContactInfo from "../../components/ContactInfo";
import Resume from "../../components/Resume";

function ContactMe(props){
    return(
        <div> 
            <ContactHeader />
            <br></br>
            <div className="row">
                <Resume/>
                <ContactInfo/>
            </div>
        </div>
    )
}

export default ContactMe;