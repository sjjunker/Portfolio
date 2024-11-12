import { getProject, getParam, getJSON, renderProjectDetails } from "./loadProjects.mjs";
import filterList from "./filter-list.mjs";

let projects = await getJSON();
let projectId = getParam("project");
let foundProject = getProject(projectId, projects);
renderProjectDetails(foundProject);