import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} from '../controllers/contact.controller.js';
import { verifyToken, requireAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

// GET api/contacts - get all contacts (requires admin - only admin can view contacts)
router.get('/', verifyToken, requireAdmin, getAllContacts);

// GET api/contacts/:id - get contact by id (requires admin)
router.get('/:id', verifyToken, requireAdmin, getContactById);

// POST api/contacts - add new contact (public - contact form)
router.post('/', createContact);

// PUT api/contacts/:id - update contact by id (requires admin)
router.put('/:id', verifyToken, requireAdmin, updateContact);

// DELETE api/contacts - remove all contacts (requires admin)
router.delete('/', verifyToken, requireAdmin, deleteAllContacts);

// DELETE api/contacts/:id - remove contact by id (requires admin)
router.delete('/:id', verifyToken, requireAdmin, deleteContact);

export default router;

