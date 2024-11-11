import { getProject, getParam, getJSON, renderProjectDetails } from "./loadProjects.mjs";

let projects = await getJSON();
let projectId = getParam("project");
console.log(projectId);
let foundProject = getProject(projectId, projects);
console.log(foundProject);
renderProjectDetails(foundProject);