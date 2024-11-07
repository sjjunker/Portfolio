//Render projects
//For projects-list.html
export function renderProjectList(projects) {
    projects.forEach(project => {
        let listDiv = document.querySelector(".projects-list");
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        let caption = document.createElement("figcaption");

        image.src = project.image;
        image.alt = `A photo of ${project.name}`;
        image.className = "project-img";

        caption.innerHTML = project.name;
        caption.className = "project-caption";

        figure.appendChild(image);
        figure.appendChild(caption);

        listDiv.appendChild(figure);
    });

}

//For project-details.html
export function renderProjectDetails(project) {
    let video = document.getElementById("project-video");
    let dateCompleted = document.getElementById("project-date-completed");
    let link = document.getElementById("project-github-link");
    let description = document.getElementById("project-description");

    video.src = project.video;
    dateCompleted = project.date;
    link = project.link;
    description = project.description;
}

//For about-me.html
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
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        let caption = document.createElement("figcaption");

        image.src = project.image;
        image.alt = `A photo of ${project.name}`;
        image.className = "project-img";

        caption.innerHTML = project.name;
        caption.className = "project-caption";

        figure.appendChild(image);
        figure.appendChild(caption);

        listDiv.appendChild(figure);
    });
}

//For index.html
export function renderSpotlightProjects(projects) {
    //Get three random numbers
    let indexes = [];
    //let currentIndex = 0;
    let number;

    number = Math.floor(Math.random() * projects.length);
    indexes.push(number);
    number = Math.floor(Math.random() * projects.length);
    indexes.push(number);
    number = Math.floor(Math.random() * projects.length);
    indexes.push(number);
    /*while (currentIndex < 3) {
        number = Math.floor(Math.random() * projects.length);
        if (!indexes.includes(number)) {
            indexes.push(number);
            currentIndex += 1;
        }
    }*/

    //Render the random spotlights
    indexes.forEach(index => {
        let listDiv = document.querySelector(".projects-list");
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        let caption = document.createElement("figcaption");

        image.src = projects[index].image;
        image.alt = `A photo of ${projects[index].name}`;
        image.className = "project-img";

        caption.innerHTML = projects[index].name;
        caption.className = "project-caption";

        figure.appendChild(image);
        figure.appendChild(caption);

        listDiv.appendChild(figure);
    });
}

//read projects from json, takes in a file of projects (current and completed)
export async function getJSON() {
    const myRequest = new Request("./data/projects.json");
    const response = await fetch(myRequest);
    const data = await response.json();
    return data;
}
