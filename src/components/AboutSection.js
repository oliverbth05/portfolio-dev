import React from 'react'; 

const AboutSection = () => {
    return (
        <section id = 'about' className = 'section-full bg-image'>
            <div className = 'container-1200 fadeIn '>
                <h1 className = 'text-center color-white p-b-1'>Oliver Bath</h1>
                <h3 className = 'text-center color-white-faded font-light p-b-2'>Front-end Web Developer</h3>
                <h4 className  = 'text-center color-white-faded font-light p-b-3'><i className="fas fa-user-graduate color-1"></i>  Bachelor's of Social Sciences from the University of Cape Town.</h4>
                <a rel="noopener noreferrer" href = 'https://github.com/oliverbth05' target="_blank" className = 'main-button'><i className="fab fa-github"></i> GitHub Profile</a>
            </div>
        </section>
    )
}

export default AboutSection