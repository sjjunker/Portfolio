//Render projects
//For projects-list.ejs
export function renderProjectList(projects) {
    projects.forEach(project => {
        let listDiv = document.querySelector(".projects-list");
        let detailButton = document.createElement("a");
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        let caption = document.createElement("figcaption");

        //Set the image
        image.src = project.image;
        image.alt = `A photo of ${project.name}`;
        image.className = "project-img";

        //Set the caption
        caption.innerHTML = project.name;
        caption.className = "project-caption";

        //Append to figure
        figure.appendChild(image);
        figure.appendChild(caption);

        //Add figure to button
        detailButton.className = "details-button";
        detailButton.appendChild(figure);
        detailButton.href = `/project-details?project=${project.id}`;

        //Add to the HTML
        listDiv.appendChild(detailButton);
    });

}

//For project-details.ejs
export function renderProjectDetails(project) {
    let title = document.getElementById("project-name");
    let video = document.getElementById("project-video");
    let dateCompleted = document.getElementById("project-date-completed");
    let link = document.getElementById("project-github-link");
    let description = document.getElementById("project-description");

    title.innerHTML = project.name;
    video.src = project.video;
    dateCompleted.innerText = project.date;
    link.href = project.link;
    description.innerText = project.description;
}

//For about-me.ejs
export function renderCurrentProjects(projects) {
    //Make a new array of only working projects
    let currentProjects = [];

    projects.forEach(project => {
        if (!(project.isCompleted)) {
            currentProjects.push(project);
        }
    });

    currentProjects.forEach(project => {
        let listDiv = document.querySelector(".projects-list");
        let detailButton = document.createElement("a");
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        let caption = document.createElement("figcaption");

        //Set the image
        image.src = project.image;
        image.alt = `A photo of ${project.name}`;
        image.className = "project-img";

        //Set the caption
        caption.innerHTML = project.name;
        caption.className = "project-caption";

        //Append to figure
        figure.appendChild(image);
        figure.appendChild(caption);

        //Add figure to button
        detailButton.className = "details-button";
        detailButton.appendChild(figure);
        detailButton.href = `/project-details?project=${project.id}`;

        //Add to the HTML
        listDiv.appendChild(detailButton);
    });
}

//For index.ejs
export function renderSpotlightProjects(projects) {
    //Get three random numbers
    let indexes = [];
    let currentIndex = 0;
    let number;

    while (currentIndex < 3) {
        number = Math.floor(Math.random() * projects.length);
        if (!indexes.includes(number)) {
            indexes.push(number);
            currentIndex += 1;
        }
    }

    //Render the random spotlights
    indexes.forEach(index => {
        let listDiv = document.querySelector(".projects-list");
        let detailButton = document.createElement("a");
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        let caption = document.createElement("figcaption");

        //Set the image
        image.src = projects[index].image;
        image.alt = `A photo of ${projects[index].name}`;
        image.className = "project-img";

        //Set the caption
        caption.innerHTML = projects[index].name;
        caption.className = "project-caption";

        //Append to figure
        figure.appendChild(image);
        figure.appendChild(caption);

        //Add figure to button
        detailButton.className = "details-button";
        detailButton.appendChild(figure);
        detailButton.href = `/project-details?project=${projects[index].id}`;

        //Add to the HTML
        listDiv.appendChild(detailButton);
    });
}

//read projects from json, takes in a file of projects (current and completed)
export async function getJSON() {
    const myRequest = new Request("./data/projects.json");
    const response = await fetch(myRequest);
    const data = await response.json();
    return data;
}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const project = urlParams.get(param);
    return project;
}

export function getProject(projectId, projects) {
    let foundProject;

    projects.forEach(project => {
        if (project.id == projectId) {
            foundProject = project;
            console.log(project);
        }
    });

    return foundProject;
}