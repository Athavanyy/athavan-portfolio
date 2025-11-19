import express from 'express';
import {
  getAllQualifications,
  getQualificationById,
  createQualification,
  updateQualification,
  deleteQualification,
  deleteAllQualifications
} from '../controllers/qualification.controller.js';
import { verifyToken, requireAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

// GET api/qualifications - get all qualifications (public - anyone can view)
router.get('/', getAllQualifications);

// GET api/qualifications/:id - get qualification by id (public - anyone can view)
router.get('/:id', getQualificationById);

// POST api/qualifications - add new qualification (requires admin)
router.post('/', verifyToken, requireAdmin, createQualification);

// PUT api/qualifications/:id - update qualification by id (requires admin)
router.put('/:id', verifyToken, requireAdmin, updateQualification);

// DELETE api/qualifications - remove all qualifications (requires admin)
router.delete('/', verifyToken, requireAdmin, deleteAllQualifications);

// DELETE api/qualifications/:id - remove qualification by id (requires admin)
router.delete('/:id', verifyToken, requireAdmin, deleteQualification);

export default router;

