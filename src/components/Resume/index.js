import React from "react";
import resumeDoc from '../assets/resume-taylor_van_scoy.txt';

function Resume() {

    return (
        <section className='resumeText'>
            <div className='resume'>
                <h2>Resume</h2>
                <h4 style={{fontWeight: 'normal'}}>Download my <a style={{fontWeight: 'bold'}} href={resumeDoc} download>resume</a></h4>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        Responsive Design
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Bootstrap
                    </li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>
                        APIs
                    </li>
                    <li>
                        Node
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        MySQL, Sequelize
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;