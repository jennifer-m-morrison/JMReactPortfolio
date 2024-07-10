import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Hero.css';


function Hero() {
    return (
        <div
            className='hero p-4 text-center bg-image'
            style={{ backgroundImage: "url('https://images.pexels.com/photos/1906440/pexels-photo-1906440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        >
            <div className='hero-content d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='mb-4'>Jennifer Morrison Designs</h1>
                    <h3 className='mb-5'>Crafting Digital Experiences</h3>
                    <a className='btn btn-hero btn-outline-dark btn-lg' href='mailto:jmitchell.morrison@gmail.com' role='button'>
                        Let's Connect
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;