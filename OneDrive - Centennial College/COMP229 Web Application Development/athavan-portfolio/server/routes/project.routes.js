import express from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProjects
} from '../controllers/project.controller.js';
import { verifyToken, requireAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

// GET api/projects - get all projects (public - anyone can view)
router.get('/', getAllProjects);

// GET api/projects/:id - get project by id (public - anyone can view)
router.get('/:id', getProjectById);

// POST api/projects - add new project (requires admin)
router.post('/', verifyToken, requireAdmin, createProject);

// PUT api/projects/:id - update project by id (requires admin)
router.put('/:id', verifyToken, requireAdmin, updateProject);

// DELETE api/projects - remove all projects (requires admin)
router.delete('/', verifyToken, requireAdmin, deleteAllProjects);

// DELETE api/projects/:id - remove project by id (requires admin)
router.delete('/:id', verifyToken, requireAdmin, deleteProject);

export default router;

