import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Socials from "./Socials";

function About(){
    return(
        <div className="main-about">
            <Navbar />
            <div className="main-content-about">
                {/* <img src="./cvphotedit.jpg" className="cv-image" alt="cv-not-loaded"/> */}
                <h1>Hello!</h1>
                <div className="text-field">
                    My name is Milan. I am aspiring web developer based in Belgrade, Serbia. 
                    Also I design and make small games from time to time. 
                    Video games and computers are my greatest passions! 🎮
                </div>
                <div className="resume-text">Feel free to contact me via my Contact page or you can download my resume <a href="https://drive.google.com/file/d/1CRJWDKG6OK5p3kxMl0eOZMSous3ogwwd/view?usp=sharing" className="link-cv">here</a></div>
                <img className="cv" src="./cvimage.png"/>
            </div>
            <div className="contact-socials">
                <Socials />
            </div>
            <Footer />
        </div>
    );
}

export default About;

//DODAJ PROJEKTE NA PROJECTS STRANI 