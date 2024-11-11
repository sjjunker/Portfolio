import { getJSON, renderSpotlightProjects } from "./loadProjects.mjs";

let projects = await getJSON();
renderSpotlightProjects(projects);