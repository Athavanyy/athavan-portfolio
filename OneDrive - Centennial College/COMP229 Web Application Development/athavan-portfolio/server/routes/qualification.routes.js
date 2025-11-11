import express from 'express';
import {
  getAllQualifications,
  getQualificationById,
  createQualification,
  updateQualification,
  deleteQualification,
  deleteAllQualifications
} from '../controllers/qualification.controller.js';

const router = express.Router();

// GET api/qualifications - get all qualifications
router.get('/', getAllQualifications);

// GET api/qualifications/:id - get qualification by id
router.get('/:id', getQualificationById);

// POST api/qualifications - add new qualification
router.post('/', createQualification);

// PUT api/qualifications/:id - update qualification by id
router.put('/:id', updateQualification);

// DELETE api/qualifications - remove all qualifications (must be before /:id route)
router.delete('/', deleteAllQualifications);

// DELETE api/qualifications/:id - remove qualification by id
router.delete('/:id', deleteQualification);

export default router;

