(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var o=a(1),r=a.n(o),n=a(6),s=a.n(n),c=a(2),i=a(0);var l=function(e){var t=e.itemSelected,a=e.setItemSelected;return Object(i.jsxs)("header",{className:"flex-row px-1",children:[Object(i.jsx)("h2",{children:Object(i.jsx)("a",{"data-testid":"link",href:"/react-portfolio",children:"Taylor Van Scoy"})}),Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{className:"flex-row",children:[Object(i.jsx)("li",{className:"mx-2 ".concat(t&&"navActive"),children:Object(i.jsx)("span",{onClick:function(){return a("about")},children:"About me"})}),Object(i.jsx)("li",{className:"mx-2 ".concat(t&&"navActive"),children:Object(i.jsx)("span",{onClick:function(){return a("contact")},children:"Contact"})}),Object(i.jsx)("li",{className:"mx-2 ".concat(t&&"navActive"),children:Object(i.jsx)("span",{onClick:function(){return a("resume")},children:"Resume"})}),Object(i.jsx)("li",{className:"mx-2 ".concat(t&&"navActive"),children:Object(i.jsx)("span",{onClick:function(){return a("portfolio")},children:"Portfolio"})})]})})]})};var d=function(){var e=Object(o.useState)([{projectName:"Milestone Goals",link:"https://milestone-goals.herokuapp.com/",image:"milestone-goals.jpg",repo:"https://github.com/proj2gr4/Milestone-Project"},{projectName:"Password Generator",link:"https://taylor124.github.io/Password-Generator/",image:"password-generator.jpg",repo:"https://github.com/taylor124/Password-Generator"},{projectName:"Note Taker",link:"https://peaceful-everglades-47355.herokuapp.com/notes",image:"note-taker.jpg",repo:"https://github.com/taylor124/professional-Note-Taker"},{projectName:"Tech Related Blog",link:"https://tech-related-blog.herokuapp.com/",image:"trb.jpg",repo:"https://github.com/taylor124/tech_related_blog"},{projectName:"Save Tv",link:"https://utbootcampgroup2.github.io/SaveTV/",image:"save-tv.jpg",repo:"https://github.com/UTBootCampGroup2/SaveTV"},{projectName:"Regex Tutorial",link:"https://gist.github.com/taylor124/ac389b237dc57846d4ca09f8eee22ead",image:"regex-tutorial.jpg",repo:"https://gist.github.com/taylor124/ac389b237dc57846d4ca09f8eee22ead"},{projectName:"Bookend",link:"http://bookend-recommendations.herokuapp.com/",image:"bookendimg.jpg",repo:"https://github.com/project3UOT/bookend"}]),t=Object(c.a)(e,1)[0];return Object(i.jsx)("section",{className:"projectList",id:"projectsArr",children:t.map((function(e){return Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("a",{href:e.link,style:{textDecoration:"none",color:"black"},children:[Object(i.jsx)("img",{src:"/react-portfolio"+"/assets/img/".concat(e.image),alt:e.name,style:{width:"100%"}}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h4",{children:Object(i.jsxs)("strong",{children:[e.projectName,Object(i.jsx)("a",{href:e.repo,children:"Link to the repo"})]})})})]})})}))})},j=a(3),m=a(4);var h=function(){var e=Object(o.useState)({name:"",email:"",message:""}),t=Object(c.a)(e,2),a=t[0],r=t[1],n=a.name,s=a.email,l=a.message,d=Object(o.useState)(""),h=Object(c.a)(d,2),b=h[0],u=h[1];function p(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),t?e.target.value.length?u(""):u("".concat(e.target.name," is required.")):u("Your email is invalid.")}r(Object(m.a)(Object(m.a)({},a),{},Object(j.a)({},e.target.name,e.target.value))),console.log("errorMessage",b),b||r(Object(m.a)(Object(m.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))}return Object(i.jsxs)("section",{className:"contactForm",children:[Object(i.jsx)("h1",{children:"Contact me"}),Object(i.jsx)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)},children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("label",{htmlFor:"name",children:"Name:"})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",defaultValue:n,onChange:p,name:"name"})}),Object(i.jsx)("div",{children:Object(i.jsx)("label",{htmlFor:"email",children:"Email address:"})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"email",defaultValue:s,name:"email",onChange:p})}),Object(i.jsx)("div",{children:Object(i.jsx)("label",{htmlFor:"message",children:"Message:"})}),Object(i.jsx)("div",{children:Object(i.jsx)("textarea",{name:"message",defaultValue:l,onChange:p,rows:"5"})}),Object(i.jsx)("button",{type:"submit",children:"Submit"})]})})]})};var b=function(){return Object(i.jsx)("section",{className:"aboutText",children:Object(i.jsxs)("div",{className:"about",children:[Object(i.jsxs)("h2",{children:["About me",Object(i.jsx)("img",{src:"/react-portfolio/assets/img/taylor.jpg",alt:"",width:"100",style:{float:"left",margin:"5px"}})]}),Object(i.jsx)("p",{children:"Hello, My name is Taylor Van Scoy. Ever since I heard that I was accepted into the University of Toronto Coding Bootcamp I've been working towards becoming a Full Stack Web Developer in hopes that I can start making video games as a career."})]})})};var u=function(){return Object(i.jsxs)("footer",{className:"footer",children:[Object(i.jsx)("a",{href:"https://www.linkedin.com/in/taylor-van-scoy-519661200/",role:"button",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(i.jsx)("a",{href:"https://github.com/taylor124",role:"button",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-github"})}),Object(i.jsx)("a",{href:"https://twitter.com/ScoyTaylor",role:"button",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-twitter"})})]})},p=a.p+"static/media/resume-taylor_van_scoy.930af193.txt";var g=function(){return Object(i.jsx)("section",{className:"resumeText",children:Object(i.jsxs)("div",{className:"resume",children:[Object(i.jsx)("h2",{children:"Resume"}),Object(i.jsxs)("h4",{style:{fontWeight:"normal"},children:["Download my ",Object(i.jsx)("a",{style:{fontWeight:"bold"},href:p,download:!0,children:"resume"})]}),Object(i.jsx)("h3",{children:"TAYLOR VAN SCOY Hanmer, ON P3P 1X5 | Phone: (705) 207-4038 | Email: vanscoytaylor@gmail.com | LinkedIn: https://www.linkedin.com/in/taylor-van-scoy-519661200/ | GitHub: https://github.com/taylor124 | Portfolio: https://taylor124.github.io/react-portfolio/ Full Stack Web Developer who\u2019s determined to become a professional game developer over the last few years. Earned a certificate in Full Stack Web Development from the University of Toronto Coding Boot Camp. Dependable and creative troubleshooter that\u2019s determined to get the job done precisely and efficiently. Great independent worker who also works well within a team. Fluent in English and French languages. TECHNICAL SKILLS Languages: JavaScript, CSS, HTML, Sequelize Applications: GitHub, MongoDB, MySQL, Heroku Tools: Express, React, Node, Handlebars, Query, Bootstrap PROJECTS Milestone Goals | GitHub | Milestone Goals *Email must already exist Summary: As a group, create and deploy an application using the skills you\u2019ve learned thus far. Role: Idea maker/bug reporter Tools: HTML, CSS, JavaScript, Node, aws-sdk, bcrypt, connect-session-sequelize, dotenv, express-handlebars, express, express-session, handlebars, mysql2, sequelize, npm start React Portfolio | GitHub  | React Portfolio Summary: Create a single page React application that will be used as your portfolio Role: Sole author Tools: Javascript, HTML, CSS, React Js Bookend | GitHub  | Bookend | email: testemail@gmail.com | password: Test123 * Email and password are temporary Summary: As a group, create and deploy an application that utilizes every skill you\u2019ve learned during the course. Role: Create the API calls and write the queries and mutations Tools: React - HTML and CSS/Front end. MongoDB/Mongoose ODM - Database. API - Google books and Movie database API. PWA - for service workers, installability and manifest. GraphQL, Node.js and Express.js servers. Queries and mutations - retrieving, adding, updating, and deleting data. EXPERIENCE Volunteer         Oct 2019 \u2013 Nov 2019 Food Bank               Sudbury, ON Non-profit organisation which specializes in distributing food for people who need it. Key Accomplishments: Received some positive feedback for learning the job quickly and performing my duties efficiently. Acted as a mentor to those who needed direction and assistance. EDUCATION Certificate, High School Diploma - Ecole Secondaire Hanmer       Hanmer, ON Certificate, Full Stack Web Development - University of Toronto       Hanmer, ON (Online Course)"})]})})};var O=function(){var e=Object(o.useState)("about"),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("header",{className:"header",children:Object(i.jsx)(l,{itemSelected:a,setItemSelected:r})}),Object(i.jsx)("main",{children:Object(i.jsxs)("div",{className:"projects",children:["portfolio"===a&&Object(i.jsx)(d,{}),"about"===a&&Object(i.jsx)(b,{}),"contact"===a&&Object(i.jsx)(h,{}),"resume"===a&&Object(i.jsx)(g,{})]})}),Object(i.jsx)(u,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,o=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),o(e),r(e),n(e),s(e)}))};a(12);s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.930028bc.chunk.js.map