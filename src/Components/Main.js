import React from 'react';
import About from './About.js';
import Projects from './Projects.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from './Skills.js';

function Main() {
    return (
        <main> 
            <About />
            <Projects />
            <Skills />
        </main>
    );
}

export default Main;