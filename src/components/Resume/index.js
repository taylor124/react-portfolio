import React from "react";
import resumeDoc from '../assets/resume-taylor_van_scoy.txt';

function Resume() {

    return (
        <section className='resumeText'>
            <div className='resume'>
                <h2>Resume</h2>
                <h4 style={{ fontWeight: 'normal' }}>Download my <a style={{ fontWeight: 'bold' }} href={resumeDoc} download>resume</a></h4>
                <h3>
                    TAYLOR VAN SCOY
                    Hanmer, ON P3P 1X5 | Phone: (705) 207-4038 | Email: vanscoytaylor@gmail.com |
                    LinkedIn: https://www.linkedin.com/in/taylor-van-scoy-519661200/ | GitHub: https://github.com/taylor124 | Portfolio: https://taylor124.github.io/react-portfolio/

                    Full Stack Web Developer who’s determined to become a professional game developer over the last few years. Earned a certificate in Full Stack Web Development from the University of Toronto Coding Boot Camp. Dependable and creative troubleshooter that’s determined to get the job done precisely and efficiently. Great independent worker who also works well within a team. Fluent in English and French languages.

                    TECHNICAL SKILLS
                    Languages: JavaScript, CSS, HTML, Sequelize
                    Applications: GitHub, MongoDB, MySQL, Heroku
                    Tools: Express, React, Node, Handlebars, Query, Bootstrap

                    PROJECTS
                    Milestone Goals | GitHub | Milestone Goals
                    *Email must already exist
                    Summary: As a group, create and deploy an application using the skills you’ve learned thus far.
                    Role: Idea maker/bug reporter
                    Tools: HTML, CSS, JavaScript, Node, aws-sdk, bcrypt, connect-session-sequelize, dotenv, express-handlebars, express, express-session, handlebars, mysql2, sequelize, npm start

                    React Portfolio | GitHub  | React Portfolio
                    Summary: Create a single page React application that will be used as your portfolio
                    Role: Sole author
                    Tools: Javascript, HTML, CSS, React Js

                    Bookend | GitHub  | Bookend | email: testemail@gmail.com | password: Test123
                    * Email and password are temporary
                    Summary: As a group, create and deploy an application that utilizes every skill you’ve learned during the course.
                    Role: Create the API calls and write the queries and mutations
                    Tools: React - HTML and CSS/Front end. MongoDB/Mongoose ODM - Database. API - Google books and Movie database API. PWA - for service workers, installability and manifest. GraphQL, Node.js and Express.js servers. Queries and mutations - retrieving, adding, updating, and deleting data.




                    EXPERIENCE
                    Volunteer									Oct 2019 – Nov 2019
                    Food Bank									    	 Sudbury, ON

                    Non-profit organisation which specializes in distributing food for people who need it.

                    Key Accomplishments:
                    Received some positive feedback for learning the job quickly and performing my duties efficiently.
                    Acted as a mentor to those who needed direction and assistance.

                    EDUCATION
                    Certificate, High School Diploma - Ecole Secondaire Hanmer 			   Hanmer, ON

                    Certificate, Full Stack Web Development - University of Toronto  		   Hanmer, ON
                    (Online Course)

                </h3>
            </div>
        </section>
    )
}

export default Resume;