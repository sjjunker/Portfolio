import { getJSON, renderProjectList } from "./loadProjects.mjs";
import listenForButtons from "./filter-list.mjs";

let projects = await getJSON();
renderProjectList(projects);

listenForButtons(projects);