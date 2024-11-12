import { renderProjectList, clearList } from "./loadProjects.mjs"

export default function listenForButtons(projects) {

    //Get buttons
    let allButton = document.getElementById("all");
    let mobileButton = document.getElementById("mobile");
    let webButton = document.getElementById("web");
    let otherButton = document.getElementById("other");

    //Set Listeners
    allButton.addEventListener("click", () => {
        clearList();
        renderProjectList(projects);
    });
    mobileButton.addEventListener("click", () => {
        clearList();
        filterList("mobile", projects)
    });
    webButton.addEventListener("click", () => {
        clearList();
        filterList("web", projects)
    });
    otherButton.addEventListener("click", () => {
        clearList();
        filterList("other", projects)
    });
}

//Filter list by Type
function filterList(projectType, projects) {
    let filteredProjects = projects;
    filteredProjects = filteredProjects.filter(project => project.type == projectType);
    renderProjectList(filteredProjects);
}