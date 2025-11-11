import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} from '../controllers/contact.controller.js';

const router = express.Router();

// GET api/contacts - get all contacts
router.get('/', getAllContacts);

// GET api/contacts/:id - get contact by id
router.get('/:id', getContactById);

// POST api/contacts - add new contact
router.post('/', createContact);

// PUT api/contacts/:id - update contact by id
router.put('/:id', updateContact);

// DELETE api/contacts - remove all contacts (must be before /:id route)
router.delete('/', deleteAllContacts);

// DELETE api/contacts/:id - remove contact by id
router.delete('/:id', deleteContact);

export default router;

