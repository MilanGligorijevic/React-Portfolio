import React from "react";
import {useRef} from "react";
import emailjs from '@emailjs/browser';


function ContactForm(){
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zvbvt7q', 'template_qsyatye', form.current, 'sfBqPr9Hxszym2Vyo')
          .then((result) => {
              console.log("Mailing works");
          }, (error) => {
              console.log("Mailing does not work");
          });
          e.target.reset();
    };

    return(
        <>
            <form ref={form} className="contactform-form" onSubmit={sendEmail}>
                <h1>Contact Form</h1>
                <label>
                    Full Name
                </label>
                    <input type="text" className="input-field" name="full_name" placeholder="Enter your name"></input>
                <label>
                    Email
                </label>
                    <input type="text" className="input-field" name="user_email" placeholder="Enter your email"></input>
                <label>
                    Subject
                </label>
                    <input type="text" className="input-field" name="subject" placeholder="Enter subject"></input>
                <label>
                    Message
                </label>
                <textarea className="text-area" name="message"></textarea>
                <button type="submit" className="submit-button"> Submit </button>
            </form>  
        </> 
    );
}


export default ContactForm;