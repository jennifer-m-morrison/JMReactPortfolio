import React from 'react';
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
    return (
        <main> 
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </main>
    );
}

export default Main;