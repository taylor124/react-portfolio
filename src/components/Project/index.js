import React, { useState } from "react";

function Project() {
    const [projects] = useState([
        {
            projectName: 'Milestone Goals',
            link: 'https://milestone-goals.herokuapp.com/',
            image: 'milestone-goals.jpg',
            repo: 'https://github.com/proj2gr4/Milestone-Project'
        },
        {
            projectName: 'Password Generator',
            link: 'https://taylor124.github.io/Password-Generator/',
            image: 'password-generator.jpg',
            repo: 'https://github.com/taylor124/Password-Generator'
        },
        {
            projectName: 'Note Taker',
            link: 'https://peaceful-everglades-47355.herokuapp.com/notes',
            image: 'note-taker.jpg',
            repo: 'https://github.com/taylor124/professional-Note-Taker'
        },
        {
            projectName: 'Tech Related Blog',
            link: 'https://tech-related-blog.herokuapp.com/',
            image: 'trb.jpg',
            repo: 'https://github.com/taylor124/tech_related_blog'
        },
        {
            projectName: 'Save Tv',
            link: 'https://utbootcampgroup2.github.io/SaveTV/',
            image: 'save-tv.jpg',
            repo: 'https://github.com/UTBootCampGroup2/SaveTV'
        },
        {
            projectName: 'Regex Tutorial',
            link: 'https://gist.github.com/taylor124/ac389b237dc57846d4ca09f8eee22ead',
            image: 'regex-tutorial.jpg',
            repo: 'https://gist.github.com/taylor124/ac389b237dc57846d4ca09f8eee22ead'
        },
        {
            projectName: 'Bookend',
            link: 'http://bookend-recommendations.herokuapp.com/',
            image: 'bookendimg.jpg',
            repo: 'https://github.com/project3UOT/bookend'
        }
    ])

    return (
        <section className="projectList" id="projectsArr">
            {projects.map((project) => (
                <div className="card">
                    <a href={project.link} style={{ textDecoration: "none", color: "black" }} >
                        <img
                            src={process.env.PUBLIC_URL + `/assets/img/${project.image}`}
                            alt={project.name}
                            style={{ width: "100%" }}
                        />
                        <div className="container">
                            <h4>
                                <strong>
                                    {project.projectName}
                                    <a href={project.repo}>Link to the repo</a>
                                </strong>
                            </h4>
                        </div>
                    </a>
                </div>
            ))}
        </section>
    )
}

export default Project;