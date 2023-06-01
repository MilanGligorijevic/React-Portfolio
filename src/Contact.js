import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Socials from "./Socials";
import ContactForm from "./ContactForm";

function Contact(){
    return(
        <div className="main-contact">
            <Navbar />   
            <div className="main-content-contact">
                <ContactForm />
                {/* <div className="contact-details">
                    <h1>Contact details</h1>
                    <h3><div className="icons-div">📍</div> Belgrade, Serbia </h3>
                    <h3><div className="icons-div">📧</div> milannnngligorijevic@gmail.com </h3>
                    <h3><div className="icons-div">📱 </div>+381 644777701 </h3>
                </div> */}
            </div>
            <div className="contact-socials">
                <Socials />
            </div>
            <Footer />
        </div>
    );
}

export default Contact;