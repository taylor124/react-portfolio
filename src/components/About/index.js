import React from "react";

function About() {

    return (
        <section className='aboutText'>
            <div className='about'>
                <h2>
                    About me
                    <img src='/assets/img/taylor.jpg' alt='' width='100' style={{float: 'left', margin: '5px'}} />
            </h2>
                <p>
                    Hello, My name is Taylor Van Scoy.
                    Ever since I heard that I was accepted into the
                    University of Toronto Coding Bootcamp I've been working towards becoming a
                    Full Stack Web Developer in hopes that I can start making video games as a career.
            </p>
            </div>
        </section>
    )
}

export default About;