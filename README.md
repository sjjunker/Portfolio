# Overview

This is my portfolio web app. The purpose of this web application is to showcase the skills I've gained not only in web development but also other types of programming. My reason for choosing to build my portfolio as a web app vs a regular static web page was to learn more about how to build webpages dynamically.

The server is started by setting an instance of path and another of express and using those to set up the view engine. The link is: http://127.0.0.1:3000/. To run the server the app uses node package manager. The terminal command to start the web app is "npm start", which will automatically open a browser to the homepage of the application.

[Software Demo Video](https://youtu.be/Al35Tq2JrzA)

# Web Pages

* Home Page: (index.ejs) Contains a hero image and project spotlights. The header and footer are created dynamically using node.js, and the project spotlights are created dynamically using javascript.
* About Me Page: (about-me.ejs): Lists my skills, interests, current projects, and education. The header and footer are created dynamically using node.js, and the current projects are created dynamically using javascript.
* Projects Page: (projects-list.ejs) Lists each project in my portfolio. Projects are loaded dynamically through javascript and filtered via the menu tabs. The header and footer are loaded dynamically through node.js.
* Project Detail Pages: (project-details.ejs) All parts of the project details pages are created dynamically except for the headings. The content is loaded via javascript and the header and footer through node.js.
* Contact Page: (contact.ejs) Contains a simple form for sending a message to me. Only the header and footer are created dynamically on this page.

# Development Environment

Tools: Visual Studio Code, Web Developer on Chrome and Safari, JSON validators, Node.js, Github, Squoosh, Moqups
Languages: HTML, CSS, Javascript
Frameworks: Express, EJS


# Useful Websites

{Make a list of websites that you found helpful in this project}
* [Squoosh](https://squoosh.app)
* [moqups](https://moqups.com)
* [JSONLint](https://jsonlint.com)
* [Medium](https://betterprogramming.pub/build-your-first-local-server-and-web-app-with-node-js-5a5d9e00aff0)
* [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)
* [Node.js Documentation](https://nodejs.org/docs/latest/api/)
* [Express Documentation] (https://expressjs.com/en/5x/api.html)

# Future Work

* Make the contact form actually send an email.
* Improve the styling. Right now it is very basic, though; passable.
* Perhaps load the JSON from a database instead.
* Add a favicon
* Link to my LinkedIn account
* Add better/more complex animations to buttons
