import { getJSON, renderProjectDetails } from "./loadProjects.mjs";

let projects = await getJSON();
renderProjectDetails(projects);