import express from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProjects
} from '../controllers/project.controller.js';

const router = express.Router();

// GET api/projects - get all projects
router.get('/', getAllProjects);

// GET api/projects/:id - get project by id
router.get('/:id', getProjectById);

// POST api/projects - add new project
router.post('/', createProject);

// PUT api/projects/:id - update project by id
router.put('/:id', updateProject);

// DELETE api/projects - remove all projects (must be before /:id route)
router.delete('/', deleteAllProjects);

// DELETE api/projects/:id - remove project by id
router.delete('/:id', deleteProject);

export default router;

