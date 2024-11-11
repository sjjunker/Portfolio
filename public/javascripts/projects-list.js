import { getJSON, renderProjectList } from "./loadProjects.mjs";

let projects = await getJSON();
renderProjectList(projects);