// import project links from json file
import { fetchJSON, renderProjects } from '../global.js';
const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');
renderProjects(projects, projectsContainer, 'h2');
// add project count to header
const title = document.querySelector('.projects-title');
title.textContent = `Projects (${projects.length})`;