import { getJSON, renderCurrentProjects } from "./loadProjects.mjs";

let projects = await getJSON();
renderCurrentProjects(projects);